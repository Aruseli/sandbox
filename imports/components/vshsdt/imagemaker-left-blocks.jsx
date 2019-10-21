import {
    Typography, ListItem, ListItemText, Grid, List, ListSubheader
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import React, { useRef, useContext, useState } from 'react';

import { interpolate } from 'react-spring';

import FsLightbox from 'fslightbox-react';

import {Picture} from './left-block-imagemaker/picture';
import {Text} from './left-block-imagemaker/text';
import { SpringContext } from '../../../pages/imagemaker';
import {Comments} from './slider'; 

import {VisibilitySensorSpring, delay} from './visibility-sensor-spring';

const Girl = require('../../../images/3.jpeg?resize&size=300');
const Diploma = require('../../../images/diplom.jpg?resize&size=300');
const DiplomaFull = require('../../../images/diplom.jpg');
const rgsu = require('../../../images/rgsu.png?resize&size=300');
const DiplomaVshsdtFull = require('../../../images/diplom-vshsdt.jpg');

const useStyle = makeStyles(() => ({
  screen: {
    position: 'relative',
    width: '100%',
    height: '70vh',
  },
}));

export const LeftBlocks = ({}) => {
  const classes = useStyle();
  const { spx } = useContext(SpringContext);
  const [toggler, setToggler] = useState(false);

  // надо такие добавлять на каждый скрин-див в котором хочется применять interpolate
  const scr1Ref = useRef();
  const scr2Ref = useRef();

  const getTop = (ref) => ref.current ? ref.current.offsetTop : 0;

  // заменил s на spx, что бы не в условных единицах а в реальных px
  // получил getTop из ref дива нужного экрана его offsetTop позицию сверху
  // отнял от spx позицию экрана сверху, и только после этого стал применять его к translate
  // для каждого экрана свои interpolate - да будет удобнее сделать папку imports/imagemaker/screens и там каждый экран
  // и в нем свои interpolate уникальные, их нельзя сделать без привязки к div-у экрана

  const scr1item1 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr1Ref)) * 0.2) + 0}px)`);
  const scr1item2 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr1Ref)) * 0.3) + 0}px)`);
  const scr1item3 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr1Ref)) * 0.5) + 0}px)`);
  
  const scr2item1 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr2Ref)) * 0.2) + 0}px)`);
  const scr2item2 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr2Ref)) * 0.5) + 0}px)`);
  const scr2item3 = interpolate([spx], (spx) => `translateY(${-((spx - getTop(scr2Ref)) * 0.5) + 0}px)`);

  // было
  // const item1 = interpolate([s], (s) => `translateY(${-(s * 300) + 0}px)`);
  // const item2 = interpolate([s], (s) => `translateY(${-(s * 1800) + 0}px)`);
  // const item3 = interpolate([s], (s) => `translateY(${-(s * 1200) + 0}px)`);
  // const item4 = interpolate([s], (s) => `transformOrigin: 'bottom', `);

  return (<>
    <div ref={scr1Ref} className={classes.screen}>
      <Picture 
        left='70%' top='65%'
        width='55%' height='60%'
        src='https://ege-merlin.ru/uploads/blog/2017_October/P3.jpg'
        alt='Длительность обучения'
        style={{transform: scr1item1}}
      />
      <Picture 
        left='32%' top='30%'
        width='55%' height='45%'
        src={Girl}
        alt='Длительность обучения'
        style={{transform: scr1item2}}
      />
      <Text 
        left='55%' top='30%'
        width='390px' height='80px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          textOut: () => ({ transform: 'translateX(300px)', opacity: 0 }),
          textIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundOut: () => ({ transform: 'translateX(300px)', opacity: 0 }),
          backgroundIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundColor: '#fffeec'
        }}
        style={{
          transform: scr1item3,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)',
        }}
      >
        <Typography component='h2' variant='h6' align="center">11 месяцев / 120 занятий / Диплом</Typography>
      </Text>
      <Text 
        left='40%' top='65%'
        width='390px' height='150px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          textOut: () => ({ transform: 'translateX(-300px)', opacity: 0 }),
          textIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundOut: () => ({ transform: 'translateX(-300px)', opacity: 0 }),
          backgroundIn: () => ({ transform: 'translateX(0px)', opacity: 1 }),
          backgroundColor: '#fff7af'
        }}
        style={{
          transform: scr1item3,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)'
        }}
      >
        <Typography component='p' variant='body1' align="center">Обучение по программе
          «Имидж‑консалтинг и fashion‑styling».
          Идеальный старт в индустрии моды
        </Typography>
        <Typography component='p' variant='body2' align="center">очно / заочно / дистанционно</Typography>
      </Text>
    </div>
    <div ref={scr2Ref} className={classes.screen}>
      <Picture 
        left='35%' top='10%'
        width='55%' height='45%'
        src={Diploma}
        alt='Диплом'
        style={{transform: scr2item1}}
        onClick={() => setToggler(!toggler)}
        wrapComponentProps={{
          // onVisibiltySensor: async ({
          //   isVisible,
          //   direction,
          //   setTextStyle, setBackgroundStyle,
          //   textOut, textIn,

          // }) => {
          //   setBackgroundStyle(
          //     isVisible
          //     ? { transform: 'translateY(0px)', opacity: 1 }
          //     : { transform: `translateY(${direction ? -300 : 300}px)`, opacity: 0 }
          //   );
          //   if (isVisible) await delay(1000);
          //   setTextStyle(isVisible ? textIn() : textOut() );
          // },
        }}
      />
      <FsLightbox 
        toggler={ toggler }
        sources={ [
          DiplomaFull,
          DiplomaVshsdtFull
        ] }
      />
      <Text 
        left='60%' top='-25%'
        width='250px' height='125px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          backgroundIn: () => ({ transform: 'translateY(0px)', opacity: 1 }),
          onVisibiltySensor: async ({
            isVisible,
            direction,
            setTextStyle, setBackgroundStyle,
            textOut, textIn,
          }) => {
            setBackgroundStyle(
              isVisible
              ? { transform: 'translateY(0px)', opacity: 1 }
              : { transform: `translateY(${direction ? -300 : 300}px)`, opacity: 0 }
            );
            if (isVisible) await delay(1000);
            setTextStyle(isVisible ? textIn() : textOut() );
          },
          backgroundColor: 'RGB(253, 210, 43)'
        }}
        style={{
          transform: scr2item3,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)'
        }}
      >
        <Typography component='p' variant='body2' align="right" style={{
          margin: '0 20px',
        }}>
        <img src ={rgsu} alt='российский государственный социальный университет' style={{
          float: 'left',
          width: '20%', height: '30%',
          marginTop: 25
        }} />
          Стратегический партнер ВШС – Российский государственный социальный университет.
        </Typography>
      </Text>
      <Text 
        left='60%' top='35%'
        width='350px' height='250px'
        WrapComponent={VisibilitySensorSpring}
        wrapComponentProps={{
          visibilitySensorProps: {offset: {top: -200 }},
          backgroundOut: () => ({ transform: 'translateY(300px)', opacity: 0 }),
          backgroundIn: () => ({ transform: 'translateY(0px)', opacity: 1 }),
          onVisibiltySensor: async ({
            isVisible,
            setTextStyle, setBackgroundStyle,
            textOut, textIn,
            backgroundOut, backgroundIn,
          }) => {
            setBackgroundStyle(isVisible ? backgroundIn() : backgroundIn() );
            if (isVisible) await delay(3000);
            setTextStyle(isVisible ? textIn() : textOut() );
          },
          backgroundColor: 'RGB(255, 234, 203)'
        }}
        style={{
          transform: scr2item2,
          // boxShadow: '0 5px 15px rgba(0, 0, 0, .1)'
        }}
      >
        <Typography component='p' variant='body2' align="center" style={{
          margin: '0 20px'
        }}>
          Комплексная программа обучения в области имидж-технологий и стилистики. 
          Основа – отличная теоретическая подготовка в сочетании 
          с формированием творческого мышления и регулярной практикой 
          создания модных и стильных образов. Результат: системные знания, 
          новые возможности профессионального развития, технологии работы с 
          клиентами и модными трендами.
        </Typography>
      </Text>
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
      // height: '50vh'
    }}>
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
            spacing={5}
          > 
            <Grid item xs={4}>
              <List>
                <Typography component='h2' variant="h6" align='center'>
                  Полная программа
                </Typography>
                <ListItem>
                  <ListItemText primary='Полная программа обучения — 11 месяцев' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='120 занятий + самостоятельная работа' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Обязательное выполнение д/з и практики' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Диплом РГСУ / ВШСДТ' />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <Typography component='h2' variant="h6" align='center'>
                  Специализация
                </Typography>
                <ListItem>
                  <ListItemText primary='Программа обучения — 6 месяцев' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='60 занятий + самостоятельная работа' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Обязательное выполнение д/з и практики' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Диплом ВШСДТ' />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={4}>
              <List>
                <Typography component='h2' variant="h6" align='center'>
                  Базовый
                </Typography>
                <ListItem>
                  <ListItemText primary='Программа обучения — 3 месяца' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='30 занятий + самостоятельная работа' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Обязательное выполнение д/з и практики' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='Сертификат' />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
      // height: '50vh'
    }}>
        <Grid
          container
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Grid
              container
              justify="flex-start"
              alignItems="flex-start"
              spacing={5}
            >
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                    Вольный слушатель
                  </Typography>
                  <ListItem>
                    <ListItemText primary='Доступно только в дистанционном обучении' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Доступ к обучению сразу после оплаты' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Возможность выбирать отдельно интересующие модули' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Без требований по выполнению д/з' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                    Очное обучение
                  </Typography>
                  <ListItem>
                    <ListItemText primary='Доступно: Москва, Новосибирск, Бишкек' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Дневные и вечерние группы' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Практика в ТЦ, консультации, фото' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Учебу курирует наставник' />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={4}>
                <List>
                  <Typography component='h2' variant="h6" align='center'>
                    Дистант или заочно
                  </Typography>
                  <ListItem>
                    <ListItemText primary='Доступно при подключении к интернет, учим на русском языке в любой точке мира' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='Гибкий график обучения, обязательно соблюдение сроков сдачи практических работ' />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary='В заочной форме обучения доступны 2 очные сессии' />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Grid>
      </Grid>
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
      // height: '100vh'
      // здесь все исходит из содержимого, не нужно никаких vh
    }}>
      <Grid
        container
        justify='center'
        alignItems='center'
      >
        <Grid item xs={8} style={{
          position: 'relative',
          // height: '40vh',
        }}>
          <VisibilitySensorSpring
            backgroundOut={() => ({ 
              transformOrigin: 'bottom',
              // размер только по нужной оси, а не просто scale
              transform: 'scaleY(0)' 
            })}
            backgroundIn={() => ({ 
              transformOrigin: 'bottom',
              // размер только по нужной оси, а не просто scale
              transform: 'scaleY(1)' 
            })}
            // <добавил>
            textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
            textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
            // </добавил>
            backgroundColor='#ffbba6'
            visibilitySensorProps={{
              // добавил это что бы раньше начиналось
              offset: { top: -100, bottom: -100 }
            }}
            onVisibiltySensor={async ({
              isVisible,
              setTextStyle, setBackgroundStyle,
              // textOut, textIn, // можно удалить отсюда, так как текст не анимируется
              backgroundOut, backgroundIn,
            }) => {
              if (isVisible) await delay(500); // только при появлении задержка
              setBackgroundStyle(isVisible ? backgroundIn() : backgroundOut() );
            }}
          >
            <>
              <Typography component='h2' variant='h6' align="center">Для кого</Typography>
              <Typography component='p' variant='body2' align="left" style={{
                margin: '0 20px'
              }}>
                Курс ориентирован на тех, кто интересуется современной fashion-индустрией, 
                кто хочет получить новую творческую профессию для будущей карьеры, а так 
                же тех, кто уже работает в модной индустрии (фотографов, парикмахеров, дизайнеров), 
                но хочет развития и профессионального роста.
              </Typography>
            </>
          </VisibilitySensorSpring>
        </Grid>
        <Grid item xs={12} style={{
          position: 'relative',
          // height: '40vh',
        }}>
          <Grid
            container
            // justify='center'
            // alignItems='center'
            justify='center'
            alignItems='flex-start'
          >
            <Grid item xs={5} style={{ position: 'relative' }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'right',
                  // размер только по нужной оси, а не просто scale
                  transform: 'scaleX(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'right',
                  // размер только по нужной оси, а не просто scale
                  transform: 'scaleX(1)' 
                })}
                // <добавил>
                textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                // </добавил>
                backgroundColor='#ffccbc'
                visibilitySensorProps={{
                  // добавил это что бы раньше начиналось
                  offset: { top: -100, bottom: -100 }
                }}
                onVisibiltySensor={async ({
                  isVisible,
                  setTextStyle, setBackgroundStyle,
                  // textOut, textIn, // можно удалить отсюда, так как текст не анимируется
                  backgroundOut, backgroundIn,
                }) => {
                  if (isVisible) await delay(500); // только при появлении задержка
                  setBackgroundStyle(isVisible ? backgroundIn() : backgroundOut() );
                }}
              >
                <>
                  <Typography component='h2' variant='h6' align="center">Возможности</Typography>
                  <List dense>
                    <ListItem dense>
                      <ListItemText primary='Имидж-консультирование клиентов, шопинг в России и Европе' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Стилизация фотосъемок (реклама, глянец), участие в ТВ проектах' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Коллаборации с дизайнерами (стилизация коллекций)' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Сотрудничество с бутиками и сетевыми магазинами' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Личный бренд, блог, networkihg и продвижение' />
                    </ListItem>
                    <ListItem dense>
                      <ListItemText primary='Свой бизнес в индустрии моды' />
                    </ListItem>
                  </List>
                </>
              </VisibilitySensorSpring>
            </Grid>
            <Grid item xs={5} style={{ position: 'relative' }}>
              <VisibilitySensorSpring
                backgroundOut={() => ({ 
                  transformOrigin: 'left',
                  // размер только по нужной оси, а не просто scale
                  transform: 'scaleX(0)' 
                })}
                backgroundIn={() => ({ 
                  transformOrigin: 'left',
                  // размер только по нужной оси, а не просто scale
                  transform: 'scaleX(1)' 
                })}
                textIn={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                textOut={() => ({ position: 'relative', width: 'initial', height: 'initial' })}
                backgroundColor='#ffab90'
                visibilitySensorProps={{
                  // добавил это что бы раньше начиналось
                  offset: { top: -100, bottom: -100 }
                }}
                onVisibiltySensor={async ({
                  isVisible,
                  setTextStyle, setBackgroundStyle,
                  // textOut, textIn, // можно удалить отсюда, так как текст не анимируется
                  backgroundOut, backgroundIn,
                }) => {
                  if (isVisible) await delay(500); // только при появлении задержка
                  setBackgroundStyle(isVisible ? backgroundIn() : backgroundOut() );
                }}
              >
                <>
                  <Typography component='h2' variant='h6' align="center">В процессе обучения вас ждут</Typography>
                  <List dense>
                    <ListItem>
                      <ListItemText primary='Мастер-классы с приглашенными экспертами' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Посещение показов и недель моды' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Участие в модных проектах' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Общение и знакомство с будущими партнерами и единомышленниками' />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary='Постоянная стильная атмосфера' />
                    </ListItem>
                  </List>
                </>
              </VisibilitySensorSpring>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    <div style={{
      position: 'relative',
      width: '100%',
    }}>
      <Comments />
    </div>
  </>);
}
    