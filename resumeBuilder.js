var bio = {
	"name": "Abeer Alyaagoub",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "+966-555-203-909",
		"email": "abeer.alyaagoub@gmail.com",
		"github": "https://github.com/AbeerAlyaagoub",
		"twitter": "https://twitter.com",
		"linkedin": "https://www.linkedin.com/in/abeer-alyaagoub-2b553b148/",
		"location": "Riyadh, Saudi Arabia"
	},
	"welcomeMessage": "Welcome to my personal webpage",
	"skills": [
		"HTML",
		"CSS",
		"Javascript",
		"Bootstrap",
		"Java",
		"Web Design",
		"Adobe XD",
		"UX & UI",
		"User Research",
		"usability Testing"
	],
	"biopic": "images/lady.png", 
};

// this function to display bio object
bio.display = function() {
	
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);	

	var formattedLinkedIn = addHyperLink(HTMLlinkedIn,bio.contacts.linkedin, "Abeer Alyaagoub");
	$("#topContacts").append(formattedLinkedIn);
	$("#footerContacts").append(formattedLinkedIn);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMessage);
	
	var formattedContactInfo = [];
		formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
		formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
		formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));
	
	for (var i = 0; i < formattedContactInfo.length; i++) {
    	$('#topContacts').append(formattedContactInfo[i]);
    	$('#footerContacts').append(formattedContactInfo[i]);
	}


	if (bio.skills.length !== 0) {
        $('#header').append(HTMLskillsStart);
        var SkillSection = bio.skills.length;
        for (i = 0; i < SkillSection; i++)
            $("#skills").append(HTMLskills.replace('%data%', bio.skills[i]));
    }
}; 

var work = {
	"jobs": [
		
		{
			"employer" : "Freelance",
			"title" : "Web Designer & Web Developer",
			"location": "Riyadh, Saudi Arabia",
			"dates" : "July 2016 - September 2016",
			"description" : "I designed and developed one of the students' clubs at Al-Yamamah University"
		},
		{
			"employer" : "Volunteer",
			"title" : "Coach",
			"location": "Jeddah, Saudi Arabia",
			"dates" : "March 2016 - May 2016",
			"description" : "I have volunteered in leading a coding initiative at Educational Age International Schools; which aims to teach kids the fundamentals of programming through fun and creative activities "
		},
		{
			"employer" : "Freelance",
			"title" : "Graphic Designer",
			"location": "Khobar,Saudi Arabia",
			"dates" : "July 2017 - Present",
			"description" : "I designed the second issue of Pulsar newsletter; a newsletter for one of the Toastmasters clubs"
		}
	]
};

// this function to display work object
work.display = function() {
	var workSection = work.jobs.length;
	for (var i = 0; i < workSection; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var concattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description);

		$(".work-entry:last").append(concattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedDescription);
	}
};

var projects = {
	"projects": [
		{
			"title" : "YU-ACM (website)",
			"dates" : "July 2016 - September 2016",
			"description" : "YU-ACM is a website for one of the students clubs in Al Yamamah University",
			"url" : "http://yu-acm.yu.edu.sa",
			"images" : ["images/acm-01.png", "images/acm-02.png", "images/acm-03.png", "images/acm-04.png"]
		},
		{
			"title" : "Pulsar (newsletter)",
			"dates" : "July 2017",
			"description" : "A newsletter for one of the Toastmasters clubs, using illustrator and InDesign",
			"url" : "https://issuu.com/qpulse.tm/docs/pulsar-newsletter-issue02",
			"images" : ["images/tm-01.png", "images/tm-02.png", "images/tm-03.png"]
		}
	]
};

// this function to display project object
projects.display = function() {
	var projectSection = projects.projects.length;
	for (i = 0; i < projectSection; i++) {
		$('#projects').append(HTMLprojectStart);

		// var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedTitle = addHyperLink(HTMLprojectTitle, projects.projects[i].url, projects.projects[i].title);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[i].description);
		
		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);


		if (projects.projects[i].images.length > 0) {
			var projectImageSection = projects.projects[i].images.length;
			for (z = 0; z < projectImageSection; z++) {
				var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[i].images[z]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}; 


var education = {
	"schools": [
		{
			"name" : "Al-Yamamah University",
			"location" : "Riyadh, Saudi Arabia",
			"degree" : "Bachelor of Computer and Information Systems",
			"majors" : ["Computer & Information Systems, Graphics and Multimedia"],
			"dates" : "2014 - Present",
			"url" : "http://yu.edu.sa"
		}	
	],
	"onlineCourses": [
		{
			"title" : "Intoduction to HTML and CSS",
			"school" : "Team Treehouse",
			"dates" : "2016",
			"url" : "https://teamtreehouse.com"
		},
		{
			"title" : "Javascript Basics",
			"school" : "Team Treehouse",
			"dates" : "2016",
			"url" : "https://teamtreehouse.coms"
		},
		{
			"title" : "Front-End Web Development Nanodegree",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://www.udacity.com"
		},
		{
			"title" : "UX Design for Mobile Development",
			"school" : "Udacity",
			"dates" : "2017",
			"url" : "https://www.udacity.com"
		}
	]
};

// this function to display education object
education.display = function() {
	//this is to dispaly schools
	var schoolSection = education.schools.length;
	$('#education').append(HTMLschoolStart);

	for (i = 0; i < schoolSection; i++) {
		
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[i].name);
        var formattedDegree  = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
 		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
		$(".education-entry:last").append(formattedSchoolName, formattedDates, formattedMajor, formattedSchoolLocation);
	}

	// this is to display Online Courses
	var onlineCoursesLength = education.onlineCourses.length;
	$("#education").append(HTMLonlineClasses, HTMLschoolStart);
	for (z = 0; z < onlineCoursesLength; z++) {		
		var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[z].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[z].school);
		var formatttedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[z].dates);
		var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[z].url);
		$('.education-entry:last').append(formatttedOnlineTitleSchool, formattedonlineDates, formattedOnlineURL, "<hr>");
	}
};


/* this is to call all functions */
bio.display();
work.display();
projects.display();
education.display();


//this is for adding the map to the page
$("#mapDiv").append(googleMap);


function addHyperLink(html,url,text){
    if (!text) { 
    	text = url; 
    }
    
    var formattedURL = html.replace("#", url);
    formattedURL = formattedURL.replace("%data%",text);
    
    return formattedURL;
}
