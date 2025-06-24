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

#### Run MFE in dev mode
```bash
cd /path/to/cloned/mfe
nvm use
npm ci
npm run dev
```
