def unique_names(names1, names2):
    name_dict = {}
    for i in names1:
        if i in name_dict:
            name_dict[i] += 1
        else:
            name_dict[i] = 1
    for j in names2:
        if j in name_dict:
            name_dict[j] += 1
        else:
            name_dict[j] = 1

    return list(name_dict.keys())

names1 = ["Ava", "Emma", "Olivia"]
names2 = ["Olivia", "Sophia", "Emma"]
print(unique_names(names1, names2)) 
# should print Ava, Emma, Olivia, Sophia

