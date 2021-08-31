# Environment 
Node v16.8.0

**Install**:

```
# apt install build-essential
```

```
# cd ION-DID-API
```

```
$ npm install
```

Run server
```
$ node index.js
```

**Check**:

Generate DID  
```
$ POST http://localhost:3333/api/generate

```
{
    "publicKeyId": "publicKeyId...",
    "serviceId": "serviceId...",
    "serviceEndpoint": "serviceEndpoint..."
} 

Resolve DID  
```
$ POST http://localhost:3333/api/resolve

```
{
    "longFormURI": "longFormURI..."
}

Resolve DID  (light)
```
$ POST http://localhost:3333/api/resolve-light

```
{
    "longFormURI": "longFormURI..."
}