let bot, command, details = {};

const BOT_COMMAND_CHARS = [null, '>', '.'],
    CHRONOS_COMMANDS = [null, 'war', 'view_wars'],
    SESHAT_COMMANDS = [null, 'privacy', 'idea'],
    SESHAT_IDEA_CAT_TYPE = [
        null,
        'name', // 1
        'occupation',
        'dialog',
        'setting',
        'plot-dare', // 5
        'female',
        'male',
        'last', // 8
        'modern',
        'archaic', // 10
        'plot',
        'dare'
    ],
    SESHAT_IDEA_CAT_TYPE_FORMATED = [
        null,
        'Name', // 1
        'Occupation',
        'Dialog',
        'Setting',
        'Plot / Dare', // 5
        'Name: Female',
        'Name: Male',
        'Name: Last', // 8
        'Occupation: Modern',
        'Occupation: Archaic', // 10
        'Plot',
        'Dare'
    ],
    SESHAT_IDEA_RATINGS = [
        null,
        'K',
        'K+',
        'T',
        'M',
        'MA'
    ];

function init() {
    console.log('init');

    hideAll();

    //set up watchers
    // bot select
    $('#botSelect').change(selectBot);

    // command select Chronos
    $('#chronosSelect').change(chronosCommandSelect);
    // command select Seshat
    $('#seshatSelect').change(seshatCommandSelect);

    $('.ideaFilterType').change(seshatFilterChange);

    $('.seshatParameterBtn').click(seshatAddParameter);
    $('.seshatParameterResetBtn').click(seshatResetParameters);

    // generate command button
    $('.generateBtn button').click(generateCommand);

    $('.copyBtn').click(function () {
        const elem = $('.command');
        elem.prop('disabled', false);
        elem.select();
        document.execCommand('copy');
        elem.prop('disabled', 'disabled');
    });
}

function hideAll() {
    // Chronos
    toggleChronosCommands(false);
    toggleChonosWarDetails(false);

    // Seshat
    toggleSeshatCommands(false);
    toggleSeshatIdeaBtn(false);
    toggleSeshatIdeaParams(false);
    toggleSeshatIdeaCatTypeSelect(false);
    toggleSeshatIdeaRatingSelect(false);
    toggleSeshatIdeaRatingAltSelect(false);
    toggleSeshatRatingHelp(false);

    // Common
    toggleGenerateBtn(false);
    toggleCommandGeneration(false);
}

function selectBot(e) {
    bot = parseInt($(e.currentTarget).val());
    console.log('Bot Value:', bot);
    resetCommands();
    switch (bot) {
        case 1:
            hideAll();
            toggleChronosCommands(true);
            break;

        case 2:
            hideAll();
            toggleSeshatCommands(true);
            break;

        default:
            hideAll();
            setDefaults();
            break;
    }
}

function chronosCommandSelect(e) {
    command = parseInt($(e.currentTarget).val());
    console.log('Chronos Command:', command);
    resetChronosWarDetails();
    switch (command) {
        case 1: // war
            toggleChonosWarDetails(true);
            toggleGenerateBtn(true);
            break;
        case 2: // view_wars
            toggleChonosWarDetails(false);
            toggleGenerateBtn(true);
            break;
        default:
            break;
    }
}

function seshatCommandSelect(e) {
    command = parseInt($(e.currentTarget).val());
    console.log('Seshat Command:', command);
    resetSeshatIdeaParams();
    resetSeshatFilter();
    switch (command) {
        case 1: // privacy
            toggleGenerateBtn(true);
            toggleSeshatIdeaBtn(false);
            toggleSeshatIdeaParams(false);
            break;
        case 2: // idea
            toggleGenerateBtn(true);
            toggleSeshatIdeaParams(true);
            resetSeshatIdeaParams(true);
            toggleSeshatIdeaCatTypeSelect(false);
            toggleSeshatIdeaRatingSelect(false);
            toggleSeshatIdeaRatingAltSelect(false);
            toggleSeshatIdeaBtn(true);
    }
}

function seshatFilterChange(e) {
    switch (parseInt($(e.currentTarget).val())) {
        case 1: // Cat/Type
            toggleSeshatIdeaCatTypeSelect(true);
            resetSeshatCatTypeSelect();
            toggleSeshatIdeaRatingSelect(false);
            toggleSeshatIdeaRatingAltSelect(false);
            break;
        case 2: // Rating Range
            toggleSeshatIdeaCatTypeSelect(false);
            toggleSeshatIdeaRatingSelect(false);
            toggleSeshatIdeaRatingAltSelect(true);
            resetRatingSelectAlt();
            break;
        case 3: // Rating Specific
            toggleSeshatIdeaCatTypeSelect(false);
            toggleSeshatIdeaRatingSelect(true);
            resetRatingSelect();
            toggleSeshatIdeaRatingAltSelect(false);
            break;
    }
}

function seshatAddParameter(e) {
    e.preventDefault();
    const  paramList = $('.ideaParameterList');
    let txt;
    switch(parseInt($('.ideaFilterType').val())) {
        case 1:
            const catType = parseInt($('.catTypeSelect').val());
            if (!catType || details.catType) {
                return;
            }
            details.catType = catType;
            const catName = SESHAT_IDEA_CAT_TYPE_FORMATED[catType];
            if (catType < 6) {
                txt = `Category: ${catName}`;
            } else {
                txt = `Type: ${catName}`;
            }
            break;
        case 2:
            let ratingMin = parseInt($('.ratingSelectAlt.min').val()),
                ratingMax = parseInt($('.ratingSelectAlt.max').val());
            if ((!ratingMin && !ratingMax) || details.ratingMin || details.ratingMax || details.rating) {
                return;
            } else if (!ratingMax) {
                details.ratingMin = ratingMin;
                ratingMax = 3;
            } else if (!ratingMin) {
                details.ratingMax = ratingMax;
                ratingMin = 1;
            } else {
                details.ratingMin = ratingMin;
                details.ratingMax = ratingMax;
            }
            txt = `Rating (Range): ${SESHAT_IDEA_RATINGS[ratingMin]} - ${SESHAT_IDEA_RATINGS[ratingMax]}`;
            break;
        case 3:
            const rating = parseInt($('.ratingSelect').val());
            if (!rating || details.ratingMin || details.ratingMax || details.rating) {
                return;
            }
            details.rating = rating;
            txt = `Rating: ${SESHAT_IDEA_RATINGS[rating]}`;
            break;
        default:
            return;
    }
    const newCol = createElement({
        classList: [
            'mx-1',
            'mb-3',
            'px-3',
            'py-2',
            'chip',
            'd-inline-block'
        ],
        text: txt
    });
    paramList.append(newCol);
}

function seshatResetParameters(e) {
    e.preventDefault();
    resetSeshatIdeaParams();
}

function createElement(params) {
    const opDefault = {
        element: 'div',
        classList: null,
        text: null
    };
    const ops = {...opDefault, ...params};
    const op = document.createElement(ops.element);
    if (ops.text) {
        const opTxt = document.createTextNode(ops.text);
        op.appendChild(opTxt);
    }
    if (ops.classList !== null && ops.classList.length > 0) {
        for (let cls of ops.classList) {
            op.classList.add(cls);
        }
    }
    return op;
}

function generateCommand() {
    let generatedCommand = `${BOT_COMMAND_CHARS[bot]}`;
    switch (bot) {
        case 1: // Chronos
            generatedCommand = `${generatedCommand}${CHRONOS_COMMANDS[command]}`;
            switch (command) {
                case 1: // war
                    const start = parseInt($('#chronosWarStartAt').val()),
                        duration = parseInt($('#chronosWarDuration').val());

                    // Check Start
                    if (start < 0 || start > 59) {
                        $('.chronosWarStartErr').addClass('text-danger');
                        return;
                    } else {
                        $('.chronosWarStartErr').removeClass('text-danger');
                    }
                    if (!isNaN(start)) {
                        generatedCommand = `${generatedCommand} :${start < 10 ? `0${start}` : start}`;
                    }

                    // Check Duration
                    if (duration < 1) {
                        $('.chronosWarDurationErr').addClass('text-danger');
                        return;
                    } else {
                        $('.chronosWarDurationErr').removeClass('text-danger');
                    }
                    if (!isNaN(duration)) {
                        generatedCommand = `${generatedCommand} ${duration}`;
                    }
                    break;
                case 2: // view_wars
                    break;
                default:
                    break;
            }
            break;
        case 2: // Seshat
            generatedCommand = `${generatedCommand}${SESHAT_COMMANDS[command]}`;
            switch (command) {
                case 1: // privacy
                    break;
                case 2: // idea
                    console.log(details);
                    if (details.catType) {
                        if (details.catType < 6) {
                            generatedCommand = `${generatedCommand} --category ${SESHAT_IDEA_CAT_TYPE[details.catType]}`;
                        } else {
                            generatedCommand = `${generatedCommand} --type ${SESHAT_IDEA_CAT_TYPE[details.catType]}`;
                        }
                    }
                    if (details.rating) {
                        generatedCommand = `${generatedCommand} --rating ${SESHAT_IDEA_RATINGS[details.rating]}`;
                    }
                    if (details.ratingMin) {
                        generatedCommand = `${generatedCommand} --min ${SESHAT_IDEA_RATINGS[details.ratingMin]}`;
                    }
                    if (details.ratingMax) {
                        generatedCommand = `${generatedCommand} --max ${SESHAT_IDEA_RATINGS[details.ratingMax]}`;
                    }
                    break;
                default:
                    break;
            }
    }
    console.log(`"${generatedCommand}"`);
    toggleCommandGeneration(true);
    $('.command, .commandTmp').text(generatedCommand);
}

function toggleShowHide(div, show) {
    show ? div.show() : div.hide();
}

function toggleChronosCommands(show) {
    toggleShowHide($('#chronosCommands'), show);
}

function toggleChonosWarDetails(show) {
    toggleShowHide($('div.detailsGroup>div.chronosWarDetails'), show);
}

function toggleSeshatCommands(show) {
    toggleShowHide($('#seshatCommands'), show);
}

function toggleSeshatIdeaBtn(show) {
    toggleShowHide($('.ideaBtn'), show);
}

function toggleSeshatIdeaParams(show) {
    toggleShowHide($('.ideaParameters'), show);
}

function toggleSeshatIdeaCatTypeSelect(show) {
    toggleShowHide($('.catTypeSelect'), show);
}

function toggleSeshatIdeaRatingSelect(show) {
    toggleShowHide($('.ratingSelect'), show);
}

function toggleSeshatIdeaRatingAltSelect(show) {
    toggleShowHide($('.ratingSelectAlt'), show);
}

function toggleSeshatRatingHelp(show) {
    toggleShowHide($('.ratingHelpBlock'), show);
}

function toggleGenerateBtn(show) {
    toggleShowHide($('.generateBtn'), show);
}

function toggleCommandGeneration(show) {
    toggleShowHide($('.commandGeneration'), show);
}

function resetCommands() {
    command = null;
    resetChronosWarDetails();
    $('#chronosSelect')[0].selectedIndex = 0;
    resetSeshatIdeaParams();
    $('#seshatSelect')[0].selectedIndex = 0;
}

function resetChronosWarDetails() {
    $('#chronosWarStartAt').val("");
    $('#chronosWarDuration').val("");
}

function resetSeshatFilter() {
    $('.ideaFilterType')[0].selectedIndex = 0;
}

function resetSeshatCatTypeSelect() {
    $('.catTypeSelect')[0].selectedIndex = 0;
}

function resetRatingSelect() {
    $('.ratingSelect')[0].selectedIndex = 0;
}

function resetRatingSelectAlt() {
    for (let elem of $('.ratingSelectAlt')) {
        $(elem)[0].selectedIndex = 0;
    }
}

function resetSeshatIdeaParams() {
    $('.ideaParameterList').html("");
    details = {};
}
