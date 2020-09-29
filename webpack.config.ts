import fs from "fs"
import path from "path"

type Product = {
    name    : string,
    filename: string,
    entry   : string,
    output  : string
}

type Tutorial = {
    name    : string,
    filename: string,
    entry   : string,
    output  : string
}

type Notebook = {
    notebook: string,
    products: Product[],
    tutorial: Tutorial[]
}

type EntryPointPath = string

type EntryPoint = {[name: string]: EntryPointPath}

const dNotebook = (notebook?: string) =>  "./src" + (notebook ? "/" + notebook : "")
const dProduct  = (notebook: string, product? : string) => dNotebook(notebook) + "/src" + (product ? "/" + product : "")
const dTutorial = (notebook: string, tutorial?: string) => dNotebook(notebook) + "/tutorial" + (tutorial ? "/" + tutorial:"")
const dOutput   = (notebook: string, name: string, isTutorial: boolean) => {
    if (isTutorial) {
        return `${notebook}/tutorial/${name}.js`
    } else {
        return `${notebook}/src/${name}.js`
    }
}

let notebooks: Notebook[] = fs.readdirSync(dNotebook())
    .filter(notebook => fs.lstatSync(dNotebook(notebook)).isDirectory())
    .filter(notebook => notebook === "rewritable-text") // Delete this after implementing the others
    .map(notebook => {
        let products = fs.readdirSync(dProduct(notebook))
            .filter(product => fs.lstatSync(dProduct(notebook, product)).isFile())
            .map(product => {
                return {
                    name    : path.parse(product).name,
                    filename: product,
                    entry   : dProduct(notebook, product),
                    output  : dOutput(notebook, product, false)
                }
            })
        
        let tutorial = [] as Tutorial[]
        if (fs.existsSync(dTutorial(notebook))) {
            tutorial = fs.readdirSync(dTutorial(notebook))
                .filter(tutorial => fs.lstatSync(dTutorial(notebook, tutorial)).isFile())
                .map(tutorial => {
                    return {
                        name    : path.parse(tutorial).name,
                        filename: tutorial,
                        entry   : dTutorial(notebook, tutorial),
                        output  : dOutput(notebook, tutorial, true)
                    }
                })
        }
        
        return {
            notebook: notebook,
            products: products,
            tutorial: tutorial
        }
    })

let entryPoints: EntryPoint = {}
notebooks.forEach(notebook => {
    notebook.products.forEach(product => {
        entryPoints[`${notebook.notebook}/src/${product.name}`] = product.entry
    })

    notebook.tutorial.forEach(tutorial => {
        entryPoints[`${notebook.notebook}/tutorial/${tutorial.name}`] = tutorial.entry
    })
})

module.exports = {
    entry: entryPoints,
    output: {
        filename: '[name].js',
        library: 'react-notebook',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    externals: {
        react: 'react'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use : 'ts-loader'
            }
        ]
    }
}