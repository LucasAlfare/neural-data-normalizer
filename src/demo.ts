/**
 * Test and examples.
 * Notes: does only work if inputs and outputs rows are
 * always of the same length. You cant ommit one field in sampleData[2] for instance.
 * NULL and empty values are not really handled and can cause bugs, but i guess
 * its probably your job to normalize that data before ?
 *
 * @author Romain Bruckert
 */
import { RowInput, Normalizer } from './normalizer';

const sampleData: Array<RowInput> = [
    { "soilhum": 500, "airtemp": 32, "airhum": 18, "water": true, "plants": ["tomatoes", "potatoes"], "tempSpan": [34, 54] },
    { "soilhum": 1050, "airtemp": 40, "airhum": 21, "water": true, "plants": ["potatoes", "asparagus"], "tempSpan": [24, 14] },
    { "soilhum": 300, "airtemp": 100, "airhum": 90, "water": false, "plants": ["asparagus", "tomatoes"], "tempSpan": [56, 4] },
    { "soilhum": 950, "airtemp": 103, "airhum": 26, "water": true, "plants": ["asparagus", "asparagus"], "tempSpan": [123, 2] },
    { "soilhum": 1050, "airtemp": 8, "airhum": 26, "water": true, "plants": ["tomatoes", "tomatoes"], "tempSpan": [67, 12] },
    { "soilhum": 1050, "airtemp": 56, "airhum": 26, "water": true, "plants": ["potatoes", "french fries"], "tempSpan": [8, 45.8] },
];

const normalizer = new Normalizer(sampleData)

// setting required options and normalize the data
normalizer.setOutputProperties(['isExpert'])
normalizer.normalize()

// find useful information about your data
// to pass to your neural network
// check input and output lenghtes
const nbrInputs = normalizer.getInputLength()
const nbrOutputs = normalizer.getOutputLength()

const metadata = normalizer.getDatasetMetaData()
const inputs = normalizer.getBinaryInputDataset()
const outputs = normalizer.getBinaryOutputDataset()

console.log('\n', '\x1b[37m\x1b[46m', 'METADATA:', '\x1b[0m')
console.log(metadata)
console.log('\n', '\x1b[37m\x1b[42m', 'INPUT:', '\x1b[0m')
console.log(inputs)
console.log('\n', '\x1b[37m\x1b[44m', 'OUTPUT:', '\x1b[0m')
console.log(outputs)
