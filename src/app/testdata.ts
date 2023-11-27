import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';

export class Testdata implements InMemoryDbService {
    createDb() {
        let bookDetails: Book[] = [
            { id: 100, name: 'Angular 16', category: 'Angular book' },
            { id: 101, name: 'Angular 15', category: 'Angular book' },
            { id: 102, name: 'React JS', category: 'React book' },
            { id: 103, name: 'Node JS', category: 'Node book' },
            { id: 104, name: 'Dot net core', category: 'dot net book' },
            { id: 105, name: 'AWS', category: 'AWS book' },
        ];
        return {books: bookDetails};
    }
}
