
import json
import os
i = 0
name = ["kosdaq", "kospi"]

def makejsonfile():
    for i in range(2):
        file = open(f"{name[i]}_code_part1.tmp", "r")

        table_json = {}

        #output array of table

        table_data = []

        for line in file:
            tmp_array = line.strip().split(",")

            while tmp_array.count(""):
                tmp_array.remove("")
            table_json[tmp_array[0]] = tmp_array[2]
            table_data.append(tmp_array[0]+"\t"+tmp_array[2])

        with open(f"./{name[i]}.json", "w") as f:
            json.dump(table_json, f, ensure_ascii=False, indent=4)
        f.close()
        file.close()
        os.remove(f"{name[i]}_code_part1.tmp")
        print(table_json)
        i=i+1
    with open("./kospi.json", "w") as kospi_json:
        data1 = json.load(kospi_json)
    with open("./kosdaq.json", "w") as kosdaq_json:
        data2 = json.load(kosdaq_json)      
    with open("./remote/INFO/stock.json", "w") as new:
        json.dump(data1+data2, new)
    kospi_json.close()
    kosdaq_json.close()
    os.remove(kospi_json)
    os.remove(kosdaq_json)
    return 0;
# makejsonfile()