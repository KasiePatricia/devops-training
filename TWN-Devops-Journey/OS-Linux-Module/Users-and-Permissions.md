# Users and Permissions

## overview
## Groups

Linux account

3 users categories
- Root user - superuser Account
- User Account
- Service Account

## muiltple users on a server, why?

## Groups and permissions
how to manage permission
- user level
- group level

## user management in practice
/etc/passwd - stores user account info, everyone cand read it, but only root user can change the file
username/password/uid/GID/GECOS/Homedir/shell

Add a new user
adduser tom - create a new user

passwd [username] = change password of a user

su - [username] = login as username
su = short for substitute or switch user
su - = login as root user

groupadd [groupname] = create new group
/etc/group = to verify

Different user and group command
adduser/addgroup     useradd/groupadd
deluser/

usermod - read

groups - list groups
group tom - lists the groups tom belongs to

sudo useradd -G devops nicole = devops is the group you are adding Nicole to when creating the user

sudo gpasswd - nicole devops - remove Nicole from the group


## ownership and permissions

### user permission
ls -l = prints files in a long listing format

### ownership
2 owners - user and group
- owner is the user, who created the file
- owning group is the primary group os that user

sudo chown [username]:[groupname] [filename] = change ownership
sudo chgrp [groupname] [filename] = change ownership

### file permission
drwxrwxr-x
file types  - regular file
            d directory
            c character device file
            l symbolic link
owner r w x -
          r read
          w write
          x execute
          - No permission
group r w x -
other r w x - All other users, who are not the file owner or don't belong to the group owner

### 3 ways to set permission
- symbolic mode
- set permission
- Numeric mode

- remove
+ add
a all the onwer

owner | group | other
u | g | o

### modifying permission
sudo chmod -x [filename]
sudo chmod g-w [filename]
sudo chmod g+x [filename]
sudo chmod g-x [filename]
sudo chmod u+x [filename]

sudo chmod g=rwx [filename] = all the permission
sudo chmod g=r-x [filename] 

Number | Permission type | Symbol
0 | No permission | ---
1 | Execute | --x
2 | write | -w-
3 | Execute + Write | -wx
4 | Read | r--
5 | Read + Excute | r-x
6 | Read + write | rw-
7 | Read + write + Excute | rwx


numeric values
sudo chmod  [filename]

