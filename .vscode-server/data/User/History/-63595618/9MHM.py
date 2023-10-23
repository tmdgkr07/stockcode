import pandas as pd
import urllib.request
import ssl
import zipfile
import os

base_dir = os.getcwd()


def get_overseas_master_dataframe(base_dir, val):
    ssl._create_default_https_context = ssl._create_unverified_context
    urllib.request.urlretrieve(f"https://new.real.download.dws.co.kr/common/master/{val}mst.cod.zip",
                               base_dir + f"/{val}mst.cod.zip")
    os.chdir(base_dir)

    overseas_zip = zipfile.ZipFile(f'{val}mst.cod.zip')
    overseas_zip.extractall()
    overseas_zip.close()
    os.remove(f'{val}mst.cod.zip')
    file_name = base_dir + f"\\{val}mst.cod"
    columns = ['National code', 'Exchange id', 'Exchange code', 'Exchange name', 'Symbol', 'realtime symbol',
               'Korea name', 'English name', 'Security type(1:Index,2:Stock,3:ETP(ETF),4:Warrant)', 'currency',
               'float position', 'data type', 'base price', 'Bid order size', 'Ask order size',
               'market start time(HHMM)', 'market end time(HHMM)', 'DR 여부(Y/N)', 'DR 국가코드', '업종분류코드',
               '지수구성종목 존재 여부(0:구성종목없음,1:구성종목있음)', 'Tick size Type',
               '구분코드(001:ETF,002:ETN,003:ETC,004:Others,005:VIX Underlying ETF,006:VIX Underlying ETN)',
               'Tick size type 상세']

    print(f"Downloading...{val}mst.cod")

    df = pd.read_table(base_dir + f"/{val}mst.cod", sep='\t', encoding='cp949')
    df.columns = columns
    #df.to_excel(f'{val}_code.xlsx', index=False)  # 현재 위치에 엑셀파일로 저장

    return df


def download_oversea():
    # 순서대로 나스닥, 뉴욕, 아멕스, 상해, 상해지수, 심천, 심천지수, 도쿄, 홍콩, 하노이, 호치민
    lst = ['nas', 'nys', 'ams']

    DF = pd.DataFrame()
    for i in lst:
        temp = get_overseas_master_dataframe(base_dir, i)
        DF = pd.concat([DF, temp], axis=0)
    print(f"Downloading...overseas_stock_code(all).xlsx")
    #DF.to_excel('overseas_stock_code(all).xlsx', index=False)  # 전체 통합파일
    print("Done")
