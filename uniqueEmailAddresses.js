var emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
var emails2 = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];

var numUniqueEmails = function(emails) {
    let possibleEmails = new Set();
    for (let i = 0; i < emails.length; i++) {

        let emailParts = emails[i].split("@");
        console.log("=========== email-parts ===============")
        console.log(emailParts)

        let localName = emailParts[0].split("+");
        console.log("=========== local-name-parts ===============")
        console.log(localName);
        
        possibleEmails.add(localName[0].replaceAll(".","") + "@" + emailParts[1]);
        
        console.log("=========== possible-emails ===============")
        console.log(possibleEmails)

    }
    return possibleEmails.size;
};

console.log(numUniqueEmails(emails));
// console.log(numUniqueEmails(emails2));