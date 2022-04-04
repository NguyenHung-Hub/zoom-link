const subjects = [
    {
        id: 1,
        name: "PLDC",
        day: "Monday",
        time: "Tiết 7-9",
        link: "https://zoom.us/j/91367799722?pwd=TWE3Tmhvem16QjhSRG1PcDU2N0RBQT09"
    },
    {
        id: 2,
        name: "WWW",
        day: "Monday",
        time: "Tiết 13-15",
        link: "https://zoom.us/j/2828559985?pwd=dDJrN2dlUzNCQUpKaDhIMHBxczdJUT09"
    },
    {
        id: 3,
        name: "LTDD",
        day: "Tuesday",
        time: "Tiết 7-9",
        link: "https://zoom.us/j/97314779930?pwd=YW1oTXg1OG9Qb05aNW5xQW1RdDJnZz09"
    },
    {
        id: 4,
        name: "Testing",
        day: "Thursday",
        time: "Tiết 4-6",
        link: "https://zoom.us/j/91682455812?pwd=ZXlGYXMxRVZuU2VSc0VOR0FmZlQ0dz09"
    },
    {
        id: 5,
        name: "WWW-TH",
        day: "Friday",
        time: "Tiết 13-15",
        link: "https://zoom.us/j/96361366217?pwd=VUZxdVBCMmh5N1ptYkdPSkdHV290UT09"
    },
    {
        id: 6,
        name: "TT-HCM",
        day: "Sunday",
        time: "Tiết 7-8",
        link: "https://zoom.us/j/91465492372?pwd=ZmVXUWZzUFdvNWdiZThnaGhwV3h4dz09"
    }

];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const main = document.querySelector('.main');

let maxRow = 1; // maxRow = số buổi học của  ngày nhiều buổi học nhất trong tuần

function countSubjectOfDay(arr, day) {
    return arr.filter(item => item.day == day).length
}

days.forEach(i => {
    if (countSubjectOfDay(subjects, i) > maxRow) {
        maxRow = countSubjectOfDay(subjects, i);
    }
});
//

function createRows(maxRow) {
    for (let index = 1; index <= maxRow; index++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.classList.add(`row-${index}`);
        main.appendChild(row);
    }
}

function createColumn(params) {
    days.forEach(i => {
        const subjectOfDay = subjects.filter(sub => sub.day === i);

        for (let index = 0; index < maxRow; index++) {
            const col = document.createElement('div');
            col.classList.add('col');
            col.classList.add('col-7');

            let box;
            if (subjectOfDay[index] == null) {
                box = `<div class="box-empty center-text"></div>`;
            } else {
                box = `
                <div class="box">
                    <div class="schedule-time">
                        <i class="fa-solid fa-calendar-days"></i> 
                        ${subjectOfDay[index].time}
                    </div>
                    <div class="subject-title">${subjectOfDay[index].name}</div>
                    <a
                        class="link-zoom"
                        href="${subjectOfDay[index].link}"
                        target="_blank"
                        >Mở zoom</a
                    >
                </div>`;
            }
            col.innerHTML = box;

            document.querySelector(`.row-${index + 1}`).appendChild(col);
        }
    });
}

createRows(maxRow);
createColumn();

