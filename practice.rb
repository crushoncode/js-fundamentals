# write a function that takes a decimal and returns a string in base 7

def convert (num, base)
    result = ""
    while num != 0 do
        result += (num % base).to_s
        num /= base
    end
    return result.reverse
end

puts convert(43,7)

# have the method take a second argument that represents the base to convert 
# into so that your method can produce any conversion from decimal to other bases.

def convert(num, base)
    result = ""

    while num != 0 do
        value = num % base + 48
        if value > 57
            value += 7 
        end 

    result += value.chr
    num /= base
    end
    return result.reverse
end

puts convert(61, 9)
