# Môi trường 
Node v16.8.0

**Cài đặt**:

```
$ cd ino
```

```
$ npm install
```

Để start server chạy:
```
$ node index.js
```

**Kiểm tra**:

Generate DID  
```
$ POST http://localhost:3333/api/generate
```
Body
{
    "publicKeyId": "publicKeyId...",
    "serviceId": "serviceId...",
    "serviceEndpoint": "serviceEndpoint..."
} 

Resolve DID  
```
$ POST http://localhost:3333/api/resolve
```
Body
{
    "longFormURI": "longFormURI..."
}

Resolve DID  (light)
```
$ POST http://localhost:3333/api/resolve-light
```
Body
{
    "longFormURI": "longFormURI..."
}