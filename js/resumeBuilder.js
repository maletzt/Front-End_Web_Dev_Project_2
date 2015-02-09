/* 
Developer: Troy Maletz
Udacity Project 2 - Interactive Resume
Project date: February 5th, 2015
*/

var bio = {
"name": "Troy Maletz",
"role": "Web Developer",
"contacts": 
{
"mobile": "678-313-2898",
"email": "maletzt@gmail.com",
"github": "maletzt",
"twitter": "MrTelcom@twitter.com",
"location": "Duluth, Georgia"
},
"welcomeMessage": "Aequam memento rebus in arduis servare mentem",
"skills": ["Flexible", "Driven", "Goal-Oriented", "Problem Solving"],
"bioPic": "images/IMG_0452.jpg",
};

bio.display = function (){
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formattedMobile);        
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formattedTwitter);        
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formattedLocation);        

        var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedPicture);

        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMsg);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#footerContacts").append(formattedMobile);        
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#footerContacts").append(formattedEmail);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#footerContacts").append(formattedGithub);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#footerContacts").append(formattedTwitter);        
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#footerContacts").append(formattedLocation);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#header").append(formattedSkills);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#header").append(formattedSkills);
}
};
bio.display();

var education = {
	"schools": [
	{
		"name": "American InterContinental University",
		"location": "Schaumburg, IL, US",
		"degree": "Bachelors",
		"majors": "BA",
		"dates": 2015,
		"url": "http://kennesaw.edu"
	},
	{
		"name": "American InterContinental University",
		"location": "Schaumburg, IL, US",
		"degree": "Associate",
		"majors": "BA",
		"dates": 2013,
		"url": "http://ung.edu"

	}
	],
	"onlineCourses": [
  {
	"title": "JavaScript Basics",
	"school": "Udacity",
	"dates": 2015,
	"url": "https://www.udacity.com/course/ud804"
  }
  ]
};
function displayEducation(){
	for (var edu in education.schools){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[edu].name).replace("#", education.schools[edu].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
		var formattedNameandDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameandDegree);
		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
		$(".education-entry:last").append(formattedDate);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
		$(".education-entry:last").append(formattedMajor);
	}
   $("#education").append(HTMLonlineClasses);
	for (var eEdu in education.onlineCourses){
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[eEdu].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[eEdu].school);
		var TitleandSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(TitleandSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[eEdu].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[eEdu].url).replace("#", education.onlineCourses[eEdu].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
}
displayEducation();

var work = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Tier 3 Network Engineer",
		"dates": "January 2009 - Present",
		"location": "Alpharetta, GA, US",
		"description": "Team leader supporting 18 employees to drive new process improvements, business rule definitions, and reducing cost.  Technical Architect for new Ultravailable Ring deployments as well as Ring augmentations through deployment of CISCO and CIENA product including Optical DWDM Metro Regional Long Haul equipment including Transport, Routers and Switches for Fortune 500 enterprises and the government."
	},
	{
		"employer": "AT&T",
		"title": "Area Manager Program/Project Management",
		"dates": "2007-2009",
		"location": "Atlanta, GA, US",
		"description": "Lead a team of 53 managers meeting key performance indicators for the Legacy B to Legacy T Migration process. Align team focus with business objectives in a highly collaborative manner. Managed team to baseline schedules through utilization of risk issues, jeopardies, and contingency planning. Received and resolved 3rd level escalations from account teams. Responsible to BellSouth Long Distance Customer Resource Center as a Voice SME for migrations. These duties include Analysis, Application, and impact to the business. I am also responsible to the Customer Resource Center as a SME dealing with Voice Products. These duties include Application Requirements, Implementation, Business Rule definition, and Process Improvements. Managed Frame Relay, MPLS, Private line, Dark fiber, VoIP networks for Fortune 500 companies and government contracts"
	},
	{	"employer": "BellSouth Business Systems",
		"title": "Manager, Customer Service",
		"dates": "2004-2007",
		"location": "Dunwoody, GA, US",
		"description": "Developed others through team meetings key performance indicators for the Complex Long Distance Dedicated Services process. Manages the daily activity of all levels of employees through coaching, counseling, and performance reviews. Received and resolved 2nd level escalations from customers and account teams. Responsible to BellSouth Long Distance Customer Resource Center as an SME for Special Customer Arrangements approval. These duties include Analysis, Application, and impact to the business. I am also responsible to BellSouth Long Distance Customer Resource Center as a SME dealing with Voice Products. These duties include Application, Implementation, Trouble Shooting, and Process Improvements"

	}
	],
display: function() {
for (var job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle=formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		 var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		 $(".work-entry:last").append(formattedDates);

		 var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		 $(".work-entry:last").append(formattedDescription);
}
}
};
work.display();

var projects = {
	"projects":[
	{
		"title": "Project 1: MockUp Webpage",
		"dates": "2014",
		"description": "This project was to take a design mockup as a PDF-file and replicate the design in HTML and CSS.",
		"images": [
		 "images/page_mockup.jpg"
		 ]
	},
	{
		"title": "Project P2: Interactive Resume",
		"dates": "2014",
		"description": "This project was to create an interactive resume utilizing my knowledge of variables, objects, JSON, functions and control flow.",
		"images": [
		 "images/interactive_resume.jpg"
		 ]
	}
	]
};

projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	  }
                                     }
};
projects.display();

$("#mapDiv").append(googleMap);

$("#mapDiv").append(internationalizeButton);

function inName(name){
    var finalName = name.trim().split(' ');
    first=finalName[0].toLowerCase();
    last=finalName[1].toUpperCase();
    finalName=first[0].toUpperCase()+first.slice(1)+" "+last;
    console.log(finalName);
    return finalName;
}