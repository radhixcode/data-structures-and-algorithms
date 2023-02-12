def unique_names_1(names1, names2):
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

    return ', '.join(list(name_dict.keys()))


def unique_names_2(names1, names2):
    return ', '.join(sorted(set(names1 + names2)))


# Test
names1 = ["Ava", "Emma", "Olivia"]
names2 = ["Olivia", "Sophia", "Emma"]

name = unique_names_1(names1, names2)
assert name == 'Ava, Emma, Olivia, Sophia'

name = unique_names_2(names1, names2)
assert name == 'Ava, Emma, Olivia, Sophia'
