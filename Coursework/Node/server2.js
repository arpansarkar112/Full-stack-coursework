// server2.js
import http from 'http';

const PORT = 8001;

let users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Jim Beam' }
];

const server = http.createServer((req, res) => {
    // GET all users
    if (req.method === 'GET' && req.url === '/api/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
    // GET user by ID
    else if (req.method === 'GET' && req.url.match(/\/api\/users\/([0-9]+)/)) {
        const id = parseInt(req.url.split('/')[3]);
        const user = users.find(u => u.id === id);

        if (user) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User not found' }));
        }
    }
    // POST a new user
    else if (req.method === 'POST' && req.url === '/api/users') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const newUser = JSON.parse(body);
            newUser.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
            users.push(newUser);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(newUser));
        });
    }
    // Not Found
    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
});

server.listen(PORT, () => {
    console.log(`REST API server running on port ${PORT}`);
});
