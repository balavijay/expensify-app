const add = (a, b) => a + b;

test('Should add 2 numbers ', () => {
    const result = add(3,4);

    if(result != 7){
        throw new Error(`you added the was not 7`);
    }

});