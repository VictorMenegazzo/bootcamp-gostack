"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateUser_1 = __importDefault(require("./services/CreateUser"));
// string, number, boolean, object, Array
// interfaces
function helloWorld(request, response) {
    var user = CreateUser_1.default({
        email: 'diego@rocketseat.com.br',
        password: '123456',
        techs: [
            'Node.js',
            'ReactJS',
            'React Native',
            { title: 'Javascript', experience: 100 },
        ],
    });
    console.log(user.email);
    return response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
