# UNIX Text Editor

## Vim

### Introduction
Vi/ Vim - built-in text editor in linux

vim [filename] = open file with vim
command mode = you can't type. default mode
edit/insert mode = enter text

to switch from command mode to intsert mode = press i key 
pres esc key = in command mode again
Type :wq = save and close file
Type :q! = quit vim without saving the changes

Delete a line
switch to command mode first
Type dd = Delete entire line
Type d10 = Delete next 10 line
Type u = to undo
Type A = jump to end of line and switch to insert mode
Type 0 = Jump to start of the line
Type $ = Jump to end of the line
Type 12G = Jump to line 12
Tpye /pattern = search for pattern
Type n = jump to next match
Type N = search in opposite direction
Type :%s/old/new = Replace old with new throughout the file