# CLI

GUI vs CLI

A graphical user interface, where we have graphical elements that you can interact with, like buttons

CLI vs. Terminal

CLI - Command line interface, where users type in commands and see the results printed on the screen

Terminal - the GUI window that you see on the screen. It takes commands and shows output

~
$
#

## Directory Operation

pwd - print/show working directory
ls - list of folders
cd - change directory
mkdir - make directory

## File Operations

touch - create a file
rm - remove/ delete file
cd .. - go up file directory
rm -r - Delere a non-empty directory and all the files within it
rm -d or rmdir - Delete an wmpty directory
cd / - brings me to the root folder
clear

## Navigating in the file system

cd [absolute path] = Move to any location by providing the full path

mv - move: mv [filename] [new_name]
cp - copy a directory to a new directory: cp -r [file_name] [new_folder]
ls -R [dir_name]
history - Gives a list of all past commands typed in the current terminal session
history 20 - gives last 20 commands

CTRL + r = search history
CTRL + c = stop current command
CTRL + SHIFT + v = paste copied text into terminal

ls -a = show all (include the hidden)
cat [filename] = Display the file content

copy = shift + ctrl + c
paste = shift + ctrl + v

different between CLI and GUI

uname -a = show system and kernal
cat /etc/os-release
lscpu
lsmem

Excute command as super user
sudo = allows regular users to run programs with the security privilages of the superuser or root
sudo adduser admin
ls /home
su - [user_name] = to switch user


## Pipes and redirects
### Input and output, pipes

every program has input and output
"pipe" command | = piping a command

less = displays the contents of a file or a command output, one page at a time
cat /var/log/syslog | less

### pipe and less
use cases
ls /usr/bin | less
history | less
space for next page
b for previous page
q to quit

### pipe and grep
grep = filters. Stands for globally search for regular expression and print out
history | grep sudo
history | grep "sudo chmod"
history | grep sudo | less
ls /urs/bin | grep java

### Redirect
> character is the redirect operator
    takes the output from the previous command and sends it to a file that you give
history | grep sudo > sudo-commands.txt

cat sudo-commands.txt > sudo-rm-commands.txt - for copying files
history | grep rm >> sudo-rm-commands.txt
>> = append 

## standard Input and Standard out
every program has 3 built-in streams
- STDIN (0) = standard input
- STDOUT (1) = standard output
- STDERR (2) = standard error

clear; sleep 1; echo "hello world"