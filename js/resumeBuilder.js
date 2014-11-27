var skills = ["Web Development", "SQL", "HTML", "JavaScript", "CSS",
"Python", "C/C++", "Java", "C#", "ASP.NET", "ColdFusion"];

var bio = {
	"name": "James Tench",
	"role": "Web Developer",
	"contacts": {
		"email": "tenchjames@gmail.com",
		"mobile": "216-571-4151",
		"github": "tenchjames.github.io",
		"twitter": "@tenchjames"
	},
	
	"pictureurl": "images/profile.jpg",
	"skills": skills,
	"welcome": "Welcome to my bio page. I am a Web Developer located in Cleveland Ohio. I " +
		"work for AT&T supporting an organization 20,000+ employees. I do both the front end "+
		"Web Development and the backend SQL.\n\n"+
		"I am also a Graduate Student at Cleveland State University working on my Masters Degree in Computer Information Systems.",
	"display": function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.pictureurl)
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
		var formattedGitHub = HTMLgithub.replace("%data%",bio.contacts.github);

		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGitHub);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcome);
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; i += 1) {
				var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
				$("#skills").append(formattedSkill);
			}
		}
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedMobile);
	}
}

var work = {
	"jobs": [
		{
			"employer": "AT&T",
			"years": "2014 - current",
			"location": "Cleveland, OH",
			"title": "Sr. Centers Technology Support Manager",
			"description": "As Sr. Centers Technology Support Manager I support the Home Solutions team at AT&T. The team handles " +
				"residential customer accounts. In my role I provide reporting and analytics to the entire field. " +
				"I develop the code for multiple web applications that the field uses on a daily basis. I primarily develop " +
				"with ASP.NET in C#. I also support an application that I developed with ColdFusion. I do both the front end " +
				"web development work for the sites, and the backend SQL. On a daily basis I extract data from an Oracle Data Warehouse, " +
				"aggregate and transform the data to be presented to the field. I have been programming and building applications " +
				"since 2004. Two of the applications developed between 2006 and 2007 are still in full production mode, " +
			    "and used by thousands of employees daily."
		},
		{
			"employer": "AT&T",
			"years": "2006 - 2014",
			"location": "Cleveland, OH",
			"title": "Center Sales Manager",
			"description": "As a Center Sales Manager I led the day to day operation of a large call center with over 300 employees. " +
			"I was responsible for ensuring each Manager and Service Representative met all targets. To do this I managed multiple " +
			"aspects of the business including: hiring, training, Union relationships, attendance, performance accountability, " +
			"rewards and recognition. I hired over 200 Service Representatives, and promoted 11 Sales Coach Managers during my role as " + 
			"Center Sales Manager. " + 
			"I coordinated and conducted daily sales meetings to consistently kept the team driven to achieve results. " +
			"I achieved best in class adjustments per customer rate out of over 40 call centers in the organization."
		}
	],
	"display": function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedWorkEmployerTitle);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].years);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);
		}
	}
};

var education = {
	"schools": [
		{
			"name": "University of Phoenix",
			"location": "Cleveland OH",
			"degree": "BS",
			"majors": ["Information Technology"],
			"dates": "2006",
			"url": "http://www.phoenix.edu/"
		},
		{
			"name": "Cleveland State University",
			"location": "Cleveland OH",
			"degree": "Masters",
			"majors": ["Computer Information Systems"],
			"dates": "2013 - Current",
			"url": "http://www.csuohio.edu/"
		}
	],
	"onlineCourses": [
		{
			"title": "JavaScript Syntax",
			"school": "Udacity",
			"dates": "2014",
			"url": "http://www.udacity.com/course/ud804"
		},
		{
			"title": "JavaScript the Good Parts",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/javascript-good-parts"
		},
		{
			"title": "JavaScript Design Patterns",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/javascript-design-patterns"
		},
		{
			"title": "Advanced Techniques in JavaScript and jQuery",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/javascript-jquery-advanced-techniques"
		},
		{
			"title": "C# Fundamentals with C# 5.0",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/csharp-fundamentals-csharp5"
		},
		{
			"title": "C# Generics",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/csharp-generics"
		},
		{
			"title": "Building a Site with Bootstrap, AngularJS, ASP.NET, EF and Azure ",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/site-building-bootstrap-angularjs-ef-azure"
		},
		{
			"title": "Implementing an API in ASP.NET Web API",
			"school": "Pluralsight",
			"dates": "2014",
			"url": "http://www.pluralsight.com/courses/implementing-restful-aspdotnet-web-api"
		},
		{
			"title": "SQL Server 2012 Querying (70-461) Part 1 ",
			"school": "Pluralsight",
			"dates": "2013",
			"url": "http://www.pluralsight.com/courses/sql-server-2012-querying-pt1"
		},
		{
			"title": "SQL Server 2012 Querying (70-461) Part 2 ",
			"school": "Pluralsight",
			"dates": "2013",
			"url": "http://www.pluralsight.com/courses/sql-server-2012-querying-pt2"
		},
		{
			"title": "SQL Server 2012 Database Administration (70-462) Part 1",
			"school": "Pluralsight",
			"dates": "2013",
			"url": "http://www.pluralsight.com/courses/sql-2012-database-administration-pt1"
		},
		{
			"title": "SQL Server 2012 Database Administration (70-462) Part 2",
			"school": "Pluralsight",
			"dates": "2013",
			"url": "http://www.pluralsight.com/courses/sql-2012-database-administration-pt2"
		},
		{
			"title": "SQL Server Performance: Indexing Basics",
			"school": "Pluralsight",
			"dates": "2013",
			"url": "http://www.pluralsight.com/courses/sql-server-indexing"
		},
		{
			"title": "SQL Server Performance: Introduction to Query Tuning",
			"school": "Pluralsight",
			"dates": "2013",
			"url": "http://www.pluralsight.com/courses/query-tuning-introduction"
		}
	],
	"display": function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(formattedSchoolNameDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		if (education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for (course in education.onlineCourses) {
				$("#education").append(HTMLschoolStart);

				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
				var formattedOnlineSchoolName = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
				var formattedOnlineTitleSchoolName = formattedOnlineTitle + formattedOnlineSchoolName;
				formattedOnlineTitleSchoolName = formattedOnlineTitleSchoolName.replace("%onlineCourseUrl%", education.onlineCourses[course].url)
				$(".education-entry:last").append(formattedOnlineTitleSchoolName);
				$(".education-entry:last").append(formattedOnlineDates);
				//$(".education-entry:last").append(formattedOnlineURL); added this to course link
			}
		}
	}
};

var project = {
	"projects": [
		{
			"title": "Assembler",
			"dates": 2014,
			"description": "Build and assembler for SIC/XE"
		},
		{
			"title": "Compiler",
			"dates": 2014,
			"description": "Build and compiler for SIC standard"
		}
	],
	"display": function() {
		for (proj in project.projects) {
			$("#projects").append(HTMLprojectStart)
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.projects[proj].title);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",project.projects[proj].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.projects[proj].description);
			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);		
		}
	}
}


bio.display();
work.display();
education.display();
//project.display();

$(document).click(function(loc) {
	logClicks(loc.pageX, loc.pageY);
});

var inName = function(name) {
	var name = $("#name").html();
	var names = name.split(" ");
	var fname = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
	var lname = names[1].toUpperCase();

	return fname + " " + lname;
}

$("#main").append(internationalizeButton);




