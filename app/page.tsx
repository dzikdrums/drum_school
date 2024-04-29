import { getList } from './lib/markdownParser';

export default async function Blog() {
    const projects = await getList('app/_projects');

    console.log(projects);
    return (
        <div className="p-10 font-mono">
            <main className="bg-gray-100 p-5">tresc</main>
        </div>
    );
}
