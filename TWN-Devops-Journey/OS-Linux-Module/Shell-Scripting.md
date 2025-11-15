# Shell Scripting

## introduction
- avoid repetitive work
- keep history of configuration
- share the instructions
- logic and bult operation

such file is called shell script
what is a shell?

### shell vs. sh vs. Bash

### Different shell implementation
- sh (Bourne Shell) - /bin/sh
- Bash (Bourne adain shell) - /bin/bash
Bash is a shell program and also a programming language

### Shebang
All shell script files have the same .sh file extension

How does OS know which shell to use?
sh - #!/bin/sh
bash - #!/bin/bash
zsh - #!/bin/zsh

why is it called "shebang"?
because od the first 2 characters: #!
# - sharp
! - bang

write and excute a simple script

```bash
#!/bin/bash

echo "Hello dear"
```
ls -l setup.sh
sudo chmod u+x setup.sh
execute = ./setup.sh 
for bash = bash setup.sh

## basic concept and syntax
- variables
```bash
#!/bin/bash

echo "Hello dear"
file_name=config.yaml
confiq_file=$(ls config)
echo "Hello $file_name dear"
```

## conditional statement

```bash
#!/bin/bash

echo "Hello dear"
file_name=config.yaml

if [ -d "config"]
then
  echo "Reading config directory contents"
  config_file=$(ls config) 
else
  echo "Config dir not found. creating one"
  mkdir config
fi

echo "Hello $file_name dear"
```

## Basic operators
-d
-f
-w
-x
-s
-e
-t

### Number comparisms
if [num_file -eq 10]
if [num_file -gt 10]
if [num_file -lt 10]
-ge
-le
-ne

### string operators
user_grp=xx
if [user_grp == "nana"]
then
elif [user_grp == "admin"] 


## Passing argument in a script

### Read user input
read -p

$* = all the params
$# = number of params

### shell loops
for param in $*
  do
    statement
  done

while loop

### Functions
passing parameter to a function
