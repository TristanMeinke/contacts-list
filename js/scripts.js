function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    // These two lines gather the values from the form input.
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    // This line invokes the constructor of Contact.
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    // This line adds a contact to the list.
    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    //Resets the value to a blank string.
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    // The following block populates the data into the hidden div on click.
    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
