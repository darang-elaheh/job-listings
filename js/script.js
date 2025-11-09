const jobsList = [
  {
    id: 1,
    company: "Photosnap",
    logo: "./images/photosnap.svg",
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: "./images/manage.svg",
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: "./images/account.svg",
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: "./images/myhome.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: "./images/loop-studios.svg",
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Ruby"],
    tools: ["Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: "./images/faceit.svg",
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: "./images/shortly.svg",
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: "./images/insure.svg",
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: "./images/eyecam-co.svg",
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: "./images/the-air-filter-company.svg",
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];
const jobListingsEl = document.querySelector(".job-listings");
const filterBtnList = document.querySelector(".filter-btn-list");
const clearBtnEl = document.querySelector(".clear-btn");
const filterSection = document.querySelector(".filter-section");
const jobSkillsArray = [];
let filterTexts = [];
function creatJob(jobsArray) {
  jobsArray.forEach(function (job) {
    const newItem = `      <div
        data-id="${job.id}"
        class="box w-full h-auto first:mt-[60px] p-5 my-15 md:my-5 bg-white rounded-md flex flex-col gap-2 md:gap-1  md:flex-row justify-around align-center">
        <div class="w-full flex flex-col justify-center -mt-12  sm:-mt-15 md:mt-0 md:w-1/8  lg:w-1/10">
          <img class="w-1/5  sm:w/1/8 xl:p-2 md:w-full " src="${job.logo}" alt="" />
        </div>
        <div class="w-full md:w-2/6  flex flex-col justify-center">
          <div
            class="text-base sm:text-xl md:text-lg lg:text-xl text-[#5ba4a4ff] font-semibold flex gap-1 items-center">
            <span>${job.company}</span>
            <span
              class="new-label hidden bg-[#5ba4a4ff] rounded-2xl text-white text-xs px-2 py-1">
              NEW!
            </span>
            <span
              class="featured-lable hidden bg-black rounded-2xl text-white text-xs px-2 py-1">
              FEATURED
            </span>
          </div>
          <div class="text-base sm:text-xl md:text-lg lg:text-xl text-[#5ba4a4ff] font-semibold">
            ${job.position}
          </div>
          <div>
            <ol
              class="flex list-disc list-inside gap-3 text-[#7b8e8eff] font-medium text-sm">
              <li class="first:list-none">${job.postedAt}</li>
              <li>${job.contract}</li>
              <li>${job.location}</li>
            </ol>
          </div>
        </div>
        <hr class="block md:hidden m-3  border border-gray-200">
        <div class="w-full md:w-3/6">
          <div class="btn-tag-list p-2 md:p-8 flex justify-start flex-wrap md:justify-end">
            <button
              data-filter="${job.role}"
              class="tag-btn bg-[#effafaff] p-2 m-1 rounded-md text-[#5ba4a4ff] font-semibold hover:text-white hover:bg-[#5ba4a4ff] cursor-pointer transition-all ease-in-out duration-600">
              ${job.role}
            </button>
            <button
              data-filter="${job.level}"
              class="tag-btn bg-[#effafaff] p-2 m-1 rounded-md text-[#5ba4a4ff] font-semibold hover:text-white hover:bg-[#5ba4a4ff] cursor-pointer transition-all ease-in-out duration-600">
              ${job.level}
            </button>
          </div>
        </div>
      </div>`;
    jobListingsEl.insertAdjacentHTML("beforeend", newItem);
    const addedEl = jobListingsEl.lastElementChild;
    const newLabel = addedEl.querySelector(".new-label");
    const newFeatured = addedEl.querySelector(".featured-lable");
    const newArray = job.languages.concat(job.tools);
    const btnTagListEl = addedEl.querySelector(".btn-tag-list");
    const jobSkill = { id: job.id, stack: [job.role, job.level, ...newArray] };
    jobSkillsArray.push(jobSkill);
    newArray.forEach(function (item) {
      const newButton = `<button
       data-filter="${item}"
                 class="tag-btn bg-[#effafaff] p-2 m-1 rounded-md text-[#5ba4a4ff] font-semibold hover:text-white hover:bg-[#5ba4a4ff] cursor-pointer transition-all ease-in-out duration-600">
                 ${item}
               </button>`;
      btnTagListEl.insertAdjacentHTML("beforeend", newButton);
    });

    if (job.new) newLabel.classList.remove("hidden");
    if (job.featured) {
      newFeatured.classList.remove("hidden");
      addedEl.classList.add("border-s-5", "border-[#5ba4a4ff]");
    }
  });
}
creatJob(jobsList);


jobListingsEl.addEventListener("click", function (e) {
  if (!e.target.classList.contains("tag-btn")) return;
  filterSection.classList.remove("hidden");
  const clickedText = e.target.dataset.filter;
  const newFliterBtn = `
          <div data-filter="${clickedText}" class="filter-btn relative bg-[#effafaff] p-2 m-3 rounded-md text-[#5ba4a4ff] text-sm font-semibold">
            ${clickedText} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button class="remove-btn text-white text-sm absolute top-0 bottom-0 right-0 p-2  rounded-e-lg bg-[#5ba4a4ff] hover:bg-black transition-all ease-in-out duration-300 cursor-pointer">
                     <img  class="w/1/2 inline-block" src="images/icon-remove.svg" alt="remove">
            </button>
          </div>`;

   filterTexts = Array.from(document.querySelectorAll(".filter-btn")).map(
    (btn) => btn.textContent.trim()
  );
  if (filterTexts.includes(clickedText)) return;

  filterBtnList.insertAdjacentHTML("beforeend", newFliterBtn);
  filterTexts.push(clickedText);
  const filterJobs = jobSkillsArray.filter(function (jobSkill) {
    return filterTexts.every(function (text) {
      return jobSkill.stack.includes(text);
    });
  });
  const filterJobsArray = jobsList.filter(function (jobs) {
    return filterJobs.some(function (filterJobs) {
      return jobs.id === filterJobs.id;
    });
  });
  jobListingsEl.innerHTML = "";
  creatJob(filterJobsArray);
});

function clearFilter() {
  filterSection.classList.add("hidden");
  filterBtnList.innerHTML = "";
  jobListingsEl.innerHTML = "";
  filterTexts = [];
  creatJob(jobsList);
  
}
clearBtnEl.addEventListener("click", clearFilter);

filterBtnList.addEventListener("click", function (e) {
  const removeBtn = e.target.closest(".remove-btn");
  if (!removeBtn) return;
    const removeText = removeBtn.closest(".filter-btn").dataset.filter;
  filterTexts = filterTexts.filter(function (filtertext) {
    return filtertext != removeText;
  });




 removeBtn.closest(".filter-btn").remove();
  if (!filterBtnList.children.length) {
    filterSection.classList.add("hidden");
    creatJob(jobsList);
  }
    const filterJobs = jobSkillsArray.filter(function (jobSkill) {
    return filterTexts.every(function (text) {
      return jobSkill.stack.includes(text);
    });
  });
  const filterJobsArray = jobsList.filter(function (jobs) {
    return filterJobs.some(function (filterJobs) {
      return jobs.id === filterJobs.id;
    });
  });
  jobListingsEl.innerHTML = "";
  creatJob(filterJobsArray);
});


