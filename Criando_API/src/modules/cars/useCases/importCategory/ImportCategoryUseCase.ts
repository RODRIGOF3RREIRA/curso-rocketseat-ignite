import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {}

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
<<<<<<< HEAD

            const categories: IImportCategory[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on('data', async line => {
                const [name, description] = line;

                categories.push({
                    name,
                    description,
                });
            });
            parseFile.on('end', () => {
                fs.promises.unlink(file.path);
                resolve(categories);
            });
            parseFile.on('error', err => {
                reject(err);
            });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async category => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name);

            if (!existCategory) {
                this.categoriesRepository.create({
                    name,
                    description,
                });
            }
=======

            const categories: IImportCategory[] = [];

            const parseFile = csvParse();

            stream.pipe(parseFile);

            parseFile.on('data', async line => {
                const [name, description] = line;

                categories.push({
                    name,
                    description,
                });
            });
            parseFile.on('end', () => {
                resolve(categories);
            });
            parseFile.on('error', err => {
                reject(err);
            });
>>>>>>> 077600aaf02364613c63bc56f317d937974d01db
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        console.log(categories);
    }
}

export { ImportCategoryUseCase };
