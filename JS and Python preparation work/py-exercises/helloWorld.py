import os
import math
import re
import functools


# 1. Command Line Arguments

def hello_world():
    name = input('What is your name? ')
    greeting = 'Hello, ' + name + '!'
    if name:
        print(greeting)
    else:
        print('Hello, Unknown!')


def hello_all(arg1, *names):
    for var in names:
        print(arg1 + var + '!')


hello_world()
hello_all('Hello, ', 'Laurent', 'Bogdan', 'Simon')


# 2. List of all files and directories names

def files_and_dirlist():
    print(os.listdir())


def files_and_dirlist_path(path):
    print(os.listdir(path))


print(files_and_dirlist())
print(files_and_dirlist_path("C:\\"))


# 3. Arrays are equal
arr1 = [2, 5, 7, 9, 11]
arr2 = [2, 5, 7, 8, 11]
arr3 = [2, 5, 11, 9, 7]


def are_two_arrays_equal(arg1, arg2):
    for elem in arg1:
        if elem not in arg2:
            return False
    else:
        return True


print(are_two_arrays_equal(arr1, arr2))  # false
print(are_two_arrays_equal(arr1, arr3))  # true


# 4. Middle character of a string

def get_middle_character(args):
    even = len(args) % 2
    if even == 0:
        print(args[int((len(args) / 2) - 1)] + args[int(len(args) / 2)])
    else:
        print(args[math.floor(len(args) / 2)])


print(get_middle_character("3500"))
print(get_middle_character("Pantera"))


# 5. Vowels in a string

def count_of_vowels(args):
    no_of_vowels = 0
    for elem in args.lower():
        if elem in 'aeiou':
            no_of_vowels += 1
    return no_of_vowels


print(count_of_vowels("SIT Academy"))


# 6. Check valid password


def is_valid_password(arg):
    has_capital_letter = re.search('[A-Z]', arg)
    is_long_enough = len(arg) >= 10
    for elem in arg:
        if not re.search('[a-zA-Z0-9]', elem):
            correct_format = False
            break
    else:
        correct_format = True
    if has_capital_letter and is_long_enough and correct_format:
        print('Password is OK!')
    else:
        print('''Please check that password: has at least ten characters, 
        consists of only letters and digits and contains at least a capital 
        letter in it.''')


is_valid_password('Ajshfjdshfsdkjfhsd')
is_valid_password('jshfjdshfsdkjfhsd')
is_valid_password('fhsd')
is_valid_password('Ajshfjdshfsdkjfhsd3#')


# 7. Find the second smallest element in an array


def find_second_smallest(args):
    min_element = min(args)
    args.remove(min_element)
    return min(args)


print(find_second_smallest([0, 3, -2, 4, 3, 2]))  # 0
print(find_second_smallest([10, 22, 10, 20, 11, 22]))  # 10


# 8. Remove duplicate elements from an array

def unique_array(args):
    args.reverse()
    for elem in args:
        if args.count(elem) > 1:
            args.remove(elem)
    args.reverse()
    return args


print(unique_array([0, 3, -2, 4, 3, 2]))  # [0, 3, -2, 4, 2]
print(unique_array([10, 22, 10, 20, 11, 22]))  # [10, 22, 20, 11]


# 9. Pentagonal numbers

def get_pentagonal_number(n):
    for i in range(1, n + 1):
        print(int((i - 1) * i + i * (i + 1) / 2))


get_pentagonal_number(50)


# 10. Length of the longest sequence of zeros in binary representation of an integer

def get_size_of_longest_sequence_of_zeros(args):
    binary = bin(args)
    binary_string = str(binary)
    binary_string = binary_string.replace("0b", "")
    current_run = 0
    max_run = 0
    for elem in binary_string:
        if elem == '1':
            current_run = 0
        else:
            current_run += 1
        if current_run > max_run:
            max_run = current_run
    return max_run


print(get_size_of_longest_sequence_of_zeros(7)) # binary representation: 111 - 0
print(get_size_of_longest_sequence_of_zeros(8)) # binary representation: 1000 - 3
print(get_size_of_longest_sequence_of_zeros(457)) # binary representation: 111001001 - longest 2
print(get_size_of_longest_sequence_of_zeros(40)) # binary representation: 101000 - longest 3
print(get_size_of_longest_sequence_of_zeros(12546)) # binary representation: 11000100000010 - longest 6


# 11. Fibonacci

def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)


def fibonacci_app():
    request = input('''Please input your request with the word fibonnaci, followed by
a single space, and then the desired number, for instance: fibonnaci 12... ''')
    num_string = ''
    for elem in request:
        if elem.isdigit():
            num_string += elem
    if not num_string:
        print('Error: you must supply which Fibonacci number to compute')
        return
    n = int(num_string)
    print(fibonacci(n))


fibonacci_app()


# 12. Factorial

# a) Recursive solution:

# def factorial(n):
# if n == 1:
# return 1
# else:
# return n * factorial(n - 1)


# def print_factorial(n):
# for i in range(1, n + 1):
# if i == 1:
# print('0! = 1')
# print('{}! = {}'.format(i, factorial(i)))


# print_factorial(5)

# b) Solution using an iterative loop:

def factorial(n):
    product = 1
    print('0! = 1')
    for i in range(1, n + 1):
        product = product * i
        print('{}! = {}'.format(i, product))


print(factorial(5))


# 13. Prime Numbers

def prime_number(n):
    prime_number_list = [2]
    reps = 2
    for i in range(1, n + 1):
        for j in range(2, i):
            reps += 1
            if i % j == 0:
                break
            elif reps == i:
                prime_number_list.append(i)
                reps = 2
    print('# Prime numbers between 1 and {} are:'.format(n))
    return prime_number_list


print(prime_number(20))


# 14. Sorting an Array

def sort_it(the_array):
    final = []
    even = []
    for elem in the_array:
        if math.floor(elem) % 2 != 0:
            final.append(elem)
        elif math.floor(elem) % 2 == 0:
            even.append(elem)
    sorted_even = sorted(even)
    sorted_even.reverse()
    for elem2 in sorted_even:
        final.append(elem2)
    return final


print(sort_it([1, 2, 3, 4, 5, 6, 7, 8, 9]))
print(sort_it([26.66, 24.01, 52.00, 2.10, 44.15, 1.02, 11.15]))
# [1.0, 3.0, 5.0, 7.0, 9.0, 8.0, 6.0, 4.0, 2.0]
# [1.02, 11.15, 52.0, 44.15, 26.66, 24.01, 2.1]


# 15 Find the Digit

def find(number, count=0, mess=''):
    number_to_string = str(number)
    digit_list = []
    for elem in number_to_string:
        digit_list.append(int(elem))
        mess += '{}*'.format(elem)
    product = functools.reduce(lambda a, b: b * a, digit_list)
    mess = mess[:-1]
    mess += '= {}, '.format(product)
    if product / 5 < 2:
        if count == 0:
            if len(digit_list) > 1:
                count += 1
            print('{} # because {}'.format(count, mess))
        else:
            count += 1
            mess = mess[:-2]
            print('{} # because {}'.format(count, mess))
    else:
        count += 1
        find(product, count, mess)


print(find(57))  # 3
print(find(5923)) # 2
print(find(90)) # 1
print(find(7)) # 0
print(find(999)) # 4