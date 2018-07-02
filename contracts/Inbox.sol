pragma solidity ^0.4.17;
contract Inbox {
    
    string public message;
    
    constructor(string initMessage) {
        message = initMessage;
    }

    function getMessage() public view returns(string) {
        return message;
    }
    
    function setMessage(string newMessage) public {
        message = newMessage;
    }
}