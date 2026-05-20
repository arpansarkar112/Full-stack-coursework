// urlDemo.js
import { URL } from 'url';

const mockUrlString = 'https://example.com/search?q=node.js&page=1';
const myUrl = new URL(mockUrlString);

console.log('URL Object:', myUrl);
console.log('Protocol:', myUrl.protocol);
console.log('Hostname:', myUrl.hostname);
console.log('Pathname:', myUrl.pathname);
console.log('Search Params:', myUrl.searchParams);

// Extract a query parameter
const query = myUrl.searchParams.get('q');
console.log('Query parameter "q":', query);
