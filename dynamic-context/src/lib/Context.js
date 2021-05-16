
// create a class and contractor to store value
// 
class Context
{
    constructor(value){
        this.value = value;
    }


//provider
// provider contains value and children as props
// save the value to the constructor
// return the children

 Provider = ({value, children})=>{
    this.value = value;
    return children;
}

//consumer
// consumer contain children 
// return the stored value to the children

Consumer = ({children})=> children(this.value)
}

//create context is a function with a initial value null
// call a new object of the class
// return provider and consumer

const createContext = (value = null)=>{
    const context = new Context (value);
    return{
        Provider: context.Provider,
        Consumer: context.Consumer,
    }
}

export default createContext;