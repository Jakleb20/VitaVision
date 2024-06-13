"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var AxiosContext_1 = require("../context/AxiosContext");
var Login = function (_a) {
    var navigation = _a.navigation;
    var _b = (0, react_1.useState)([]), users = _b[0], setUsers = _b[1];
    var _c = (0, react_1.useState)(""), enteredUser = _c[0], setEnteredUser = _c[1];
    var _d = (0, react_1.useState)(""), enteredPassword = _d[0], setEnteredPassword = _d[1];
    function fetchUsers() {
        return __awaiter(this, void 0, void 0, function () {
            var initialUsers, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, AxiosContext_1.default.getUsers()];
                    case 1:
                        initialUsers = _a.sent();
                        alert(initialUsers);
                        setUsers(initialUsers);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error fetching users:", error_1);
                        return [3 /*break*/, 3];
                    case 3:
                        alert("test");
                        return [2 /*return*/];
                }
            });
        });
    }
    // useEffect(() => {
    //     const fetchUsers = async () => {
    //         try {
    //             const initialUsers: IUser[] = await axiosContext.getUsers();
    //             alert(initialUsers)
    //             setUsers(initialUsers);
    //         } catch (error) {
    //             console.error("Error fetching users:", error);
    //         }
    //     };
    //
    //     fetchUsers();
    // }, []);
    function onLogin() {
        return __awaiter(this, void 0, void 0, function () {
            var initialUsers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, AxiosContext_1.default.getUsers()];
                    case 1:
                        initialUsers = _a.sent();
                        alert(initialUsers);
                        users.forEach(function (u) {
                            if (u.name === enteredUser && u.password === enteredPassword) {
                                navigation.navigate('Main');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function onCancel() {
        navigation.navigate('Home');
    }
    return (<react_native_1.View style={styles.container}>
            <react_native_1.Text style={styles.heading}>Login</react_native_1.Text>

            <react_native_1.View style={styles.inputContainer}>
                <react_native_1.Text style={styles.labelText}>Username</react_native_1.Text>
                <react_native_1.TextInput style={styles.inputFields} onChangeText={setEnteredUser} placeholder="Enter username ..."/>
            </react_native_1.View>

            <react_native_1.View style={styles.inputContainer}>
                <react_native_1.Text style={styles.labelText}>Password</react_native_1.Text>
                <react_native_1.TextInput style={styles.inputFields} onChangeText={setEnteredPassword} secureTextEntry={true} placeholder="Enter password ..."/>
            </react_native_1.View>

            <react_native_1.View style={styles.btLogin}>
                <react_native_1.Button color={"#00b200"} title={"Login"} onPress={onLogin}/>
            </react_native_1.View>

            <react_native_1.View style={styles.btCancel}>
                <react_native_1.Button color={"grey"} title={"Cancel"} onPress={onCancel}/>
            </react_native_1.View>
                
            
            <react_native_1.View>
                <react_native_1.Button title={"LoadUsers"} onPress={fetchUsers}></react_native_1.Button>
            </react_native_1.View>
            
            
            
        </react_native_1.View>);
};
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontSize: 50,
        marginBottom: 20
    },
    inputContainer: {
        marginBottom: 20
    },
    labelText: {
        marginBottom: 5,
        fontSize: 18
    },
    inputFields: {
        borderWidth: 1,
        borderColor: "grey",
        width: 200,
        height: 40,
        paddingLeft: 5
    },
    btLogin: {
        width: 200,
        marginBottom: 20
    },
    btCancel: {
        width: 200,
        marginBottom: 20
    }
});
exports.default = Login;
