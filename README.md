# Environment 
Node v16.8.0

**Install**:
```
# curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
```
```
# apt -y install nodejs
```
```
# apt install build-essential
```
```
# cd ION-DID-API
```
```
# npm install
```
Run server
```
# node index.js
```
Server listen on port 3333

**Check**:

1. Generate DID  
```
$ POST http://localhost:3333/api/generate

```
Input
```json
{
    "publicKeyId": "publicKeyId...",
    "serviceId": "serviceId...",
    "serviceEndpoint": "serviceEndpoint..."
}
```

2. Resolve DID  
```
$ POST http://localhost:3333/api/resolve

```
Input
```json
{
    "longFormURI": "longFormURI..."
}
```
3. Resolve DID  (light)
```
$ POST http://localhost:3333/api/resolve-light

```
Input
```json
{
    "longFormURI": "longFormURI..."
}
```