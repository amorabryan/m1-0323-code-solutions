/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const allInitials = person.firstName.charAt(0) + person.lastName.charAt(0);
  return allInitials;
}
