## Connecting to Workshop VMs
Make sure to replace `IP_YOU_SELECTED` with your VM's IP.

### Test Connection
```bash
ssh -o TCPKeepAlive=yes -o ServerAliveInterval=120 workshop@{IP_YOU_SELECTED}
```

### Connect with Port Forwarding
#### Script
The script is in the `frontend-plugin-workshop-2025` repo, `scripts/connect.sh`.

#### Manual
```bash
ssh -o TCPKeepAlive=yes -o ServerAliveInterval=120 $(for i in 8000 8001 1984 1993 1994 1995 1996 1997 1999 2000 2001 2002; do echo -L ${i}:localhost:${i} ; done) workshop@{IP_YOU_SELECTED};
```

## Using Tutor
### Mounts
#### See current mounts
```bash
tutor mounts list
```

#### Mount an MFE directory
```bash
tutor mounts add /path/to/mfe
```

#### Unmount an MFE directory
```bash
tutor mounts remove /path/to/mounted/mfe
```

### Start Tutor
```bash
tutor dev start lms cms mfe -d
```

### Stop Tutor
```bash
tutor dev stop
```

### Run MFE in dev mode
```bash
cd /path/to/cloned/mfe
nvm use
npm ci
npm run dev
```
