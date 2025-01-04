# Part one

- Need to create more free space by compacting files
- Digits in a file alternate between
  - length of file
  - space between files
- Each file has an ID - starts at zero
- Compact space by moving digits in file to spaces

# Part two

Same as part 1, but instead of moving individual digits, need to move whole files

- Go backwards from the end
- Find the last file
- Check its length
- Get all the spaces
- Check if there is one that can take the file
- Move the file to this space
- If the file is smaller than the space, take this into account
