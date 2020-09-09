
function authenticator(checkUserInput) {
    let convertedArr = Object.values(checkUserInput)
        if (!Number(convertedArr[0]) || convertedArr[0].length === 0) {
            console.log("\x1b[31m","Please enter valid ID number")
            return false
        } else if (Number(convertedArr[1]) || convertedArr[1].length === 0 || !/^[a-zA-Z]+$/.test(convertedArr[1])) {
            console.log("\x1b[31m","Please enter valid Name")
            return false
        } else if ((!convertedArr[2].includes("@") || !convertedArr[2].includes(".") || convertedArr[2].length === 0)) {
            console.log("\x1b[31m","Please enter valid Email")
            return false
        } else {
            let convertedArrKey = Object.keys(checkUserInput)
            switch (convertedArrKey[3]) {
                case "managerOfficeNumber":
                    if (!Number(convertedArr[3]) || convertedArr[3].length === 0) {
                        console.log("\x1b[31m","Please enter valid Office number")
                        return false
                    } else {
                        return true
                    }
                    break;
                case "engineerGithub":
                    if (convertedArr[3].length === 0 || !/^[a-zA-Z]+$/.test(convertedArr[3])) {
                        console.log("\x1b[31m","Please enter valid github")
                    } else {
                        return true
                    }
                    break;
                default:
                    if (convertedArr[3].length === 0 || !/^[a-zA-Z_ ]+$/.test(convertedArr[3])) {
                        console.log("\x1b[31m","Please enter valid school")
                    } else {
                        return true
                    }
            }
        }
}

module.exports = authenticator