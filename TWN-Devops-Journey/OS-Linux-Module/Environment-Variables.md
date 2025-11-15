# Environment Variable

## list env varible
printenv

open 
printenv | less

print individual env variable
printenv USER

printenv | grep USER

## Application Env variable
use cases of env variable

## create env variable

export DB_PASSWORD=secretvalue
access them with echo $DB_PASSWORD

### Delete env variable
unset DB_PASSWORD

### Persisting env variable
.bashrc = shell specific configuration file = permently add variable
source .bashrc = to refresh

### Persisting env variable (system wide)
/etc/environment
what is PATH env variable?

## add a custom command/program
