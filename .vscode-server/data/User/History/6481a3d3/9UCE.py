
import json
import os
i = 0
name = ["AMSMST", "NASMST", "NYSMST"]

def makejsonfile():
    for i in range(3):
        file = open(f"{name[i]}.COD", "r", encoding="cp949")

        table_json = {}

        #output array of table

        table_data = []

        for line in file:
            tmp_array = line.strip().split("\t")

            while tmp_array.count(""):
                tmp_array.remove("")
            table_json[tmp_array[4]] = tmp_array[6]
            table_data.append(tmp_array[4]+"\t"+tmp_array[6])

        with open(f"./remote/INFO/{name[i]}.json", "w") as f:
            json.dump(table_json, f, ensure_ascii=False, indent=4)
        f.close()
        file.close()
        os.remove(f"{name[i]}.COD")
        print(table_json)
        i=i+1
    return 0;
