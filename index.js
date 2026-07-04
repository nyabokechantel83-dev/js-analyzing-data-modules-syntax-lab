


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
require("datejs");

function combineUsers(...args) {
  const combinedObject = {
    users: []
  };

  // Loop through each array of usernames
  for (const userArray of args) {
    // Merge the usernames into the users array
    combinedObject.users.push(...userArray);
  }

  // Add today's date in M/d/yyyy format
  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  // Return the completed object
  return combinedObject;
}

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
};