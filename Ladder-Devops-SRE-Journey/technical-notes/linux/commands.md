# Linux Command Cheatsheet (Week 1 Goal: 50 Commands)

```bash
# Navigation
pwd, cd, ls -la, tree

# File Ops
touch, mkdir -p, cp -r, mv, rm -rf, ln -s

# View/Edit
cat, less, head -n 10, tail -f, nano, vim

# Search
find /var/log -name "*.log", grep -r "error" .

# Processes
ps aux, top, htop, kill -9, nohup

# Permissions
chmod 755, chown user:group, sudo

# Disk
df -h, du -sh *, fdisk -l, mount

# Network
curl -I, wget, ping, netstat -tulnp, ss -tulnp, ip a

# System
uname -a, uptime, free -h, dmesg | tail

# Archive
tar -czvf, tar -xzvf, zip, unzip