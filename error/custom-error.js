class CustormAPIError extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}

const createCustomeError=(msg,statusCode)=>{
    return new CustormAPIRerror(msg,statusCode)
}

module.exports={createCustomeError,CustormAPIError}