import type { NextPage } from 'next';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { startingQuestionType } from '../src/types/startingQuestion';
import StartHeading from '../src/components/StartHeading';
import StartConfirmText from '../src/components/StartConfirmText';
import Btn from '../src/components/Btn';

let editName: string = '';
const nameFunc = (e: any) => {
  editName = e.target.value;
};

const AGE_ARRAY_WIDTH = 176;
const AGE_ARRAY_WIDTH_HALF = AGE_ARRAY_WIDTH / 2;

const Start: NextPage = () => {
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [nicknameNumber, setNicknameNumber] = useState<number>(0);
  const [displayNickname, setDisplayNickname] = useState<string>('');
  const [age, setAge] = useState<number>(5);
  const [ageIndex, setAgeIndex] = useState<number>(2);
  const [use, setUse] = useState<number>(0);
  const [slide, setSlide] = useState<number>(0);
  const [firestoreData, setFirestoreData] = useState<any>();

  let ageArrayBox: any = '';
  const nicknameArray = ['ちゃん', 'くん', 'さん'];
  const ageArray = [3, 4, 5, 6, 7, 8];
  const btnObj: {
    text: string;
    bgColor: string;
    shadowColor: string;
  }[][] = [
    [{ text: 'けってい！', bgColor: '#F2798F', shadowColor: '#ED4076' }],
    [
      { text: 'ちがうよ', bgColor: '#36C8D9', shadowColor: '#049DD9' },
      { text: 'あってる！', bgColor: '#F2798F', shadowColor: '#ED4076' },
    ],
  ];
  const useArray = [displayNickname, 'お母さん\nお父さん'];

  const slideFunc = (i: number, slideIndex: number, pageIndex: number) => {
    // console.log(pageIndex);

    if (slideIndex === 0 || (slideIndex === 1 && i === 1)) {
      if (slideIndex === 0) {
        if (pageIndex === 0) {
          setName(editName);
          setNickname(name + nicknameArray[0]);
          setDisplayNickname(name + '\n' + nicknameArray[0]);
        } else if (pageIndex === 2) {
          if (document) {
            ageArrayBox = document.querySelectorAll('.ageArrayBox')[0];
          }
          let ageArrayBoxScrollDivision: number = Math.floor(
            ageArrayBox.scrollLeft / AGE_ARRAY_WIDTH_HALF
          );
          // console.log(ageArrayBoxScrollDivision);
          if (ageArrayBoxScrollDivision === 0) {
            setAgeIndex(0);
            setAge(ageArray[0]);
          } else if (ageArrayBoxScrollDivision < 3) {
            setAgeIndex(1);
            setAge(ageArray[1]);
          } else if (ageArrayBoxScrollDivision < 5) {
            setAgeIndex(2);
            setAge(ageArray[2]);
          } else if (ageArrayBoxScrollDivision < 7) {
            setAgeIndex(3);
            setAge(ageArray[3]);
          } else if (ageArrayBoxScrollDivision < 9) {
            setAgeIndex(4);
            setAge(ageArray[4]);
          } else if (ageArrayBoxScrollDivision < 11) {
            setAgeIndex(5);
            setAge(ageArray[5]);
          }
        }
        if (editName.length === 0) {
        } else {
          setSlide(slide + 1);
        }
      } else {
        setSlide(slide + 1);
      }
    } else if (slideIndex === 1 && i === 0) {
      setSlide(slide - 1);
    }
  };
  const nicknameFunc = (i: number) => {
    setNicknameNumber(i);
    setNickname(name + nicknameArray[i]);
    setDisplayNickname(name + '\n' + nicknameArray[i]);
  };
  // const ageFunc = (i: number) => {
  //   setAgeIndex(i);
  //   setAge(ageArray[i]);
  // };
  const ageFunc = (e: any) => {
    if (document) {
      ageArrayBox = document.querySelectorAll('.ageArrayBox')[0];
    }
    let ageArrayBoxScrollDivision: number = Math.floor(
      ageArrayBox.scrollLeft / AGE_ARRAY_WIDTH_HALF
    );
    if (ageArrayBoxScrollDivision === 0) {
      ageArrayBox.scrollLeft = 0;
    } else if (ageArrayBoxScrollDivision < 3) {
      ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH;
    } else if (ageArrayBoxScrollDivision < 5) {
      ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 2;
    } else if (ageArrayBoxScrollDivision < 7) {
      ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 3;
    } else if (ageArrayBoxScrollDivision < 9) {
      ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 4;
    } else if (ageArrayBoxScrollDivision < 11) {
      ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 5;
    }
    // setAgeIndex(ageArrayBoxScrollIndex);
    // setAge(ageArray[ageArrayBoxScrollIndex]);
    // if (ageArrayBoxScrollDivision === 0) {
    //   ageArrayBox.scrollLeft = 0;
    // } else if (ageArrayBoxScrollDivision === 1) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH;
    // } else if (ageArrayBoxScrollDivision === 2) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH;
    // } else if (ageArrayBoxScrollDivision === 3) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 2;
    // } else if (ageArrayBoxScrollDivision === 4) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 2;
    // } else if (ageArrayBoxScrollDivision === 5) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 3;
    // } else if (ageArrayBoxScrollDivision === 6) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 3;
    // } else if (ageArrayBoxScrollDivision === 7) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 4;
    // } else if (ageArrayBoxScrollDivision === 8) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 4;
    // } else if (ageArrayBoxScrollDivision === 9) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 5;
    // } else if (ageArrayBoxScrollDivision === 10) {
    //   ageArrayBox.scrollLeft = AGE_ARRAY_WIDTH * 5;
    // }
    // }
  };
  const useFunc = (i: number) => {
    setUse(i);
  };
  const setFireStoreFunc = () => {
    setFirestoreData({
      name: name,
      nicknameIndex: nicknameNumber,
      age: age,
      useIndex: use,
    });
  };

  const StartBtn = ({ data, index }: { data: number; index: number }) => {
    return (
      <Flex as="ul" flexWrap="wrap" gap="24px 16px" fontSize="3.3rem">
        {btnObj[data].map((item, i: number) => (
          <Flex
            as="li"
            onClick={() => slideFunc(i, data, index)}
            key={item.text + i}
            pos="relative"
            // sx={{
            //   ...(name === ''
            //     ? {
            //         pointerEvents: 'none',
            //       }
            //     : {
            //         pointerEvents: 'auto',
            //       }),
            // }}
          >
            <Center
              as="button"
              w="280px"
              h="80px"
              color="white"
              m="5px"
              borderRadius="9999px"
              pos="relative"
              zIndex="3"
              background={item.bgColor}
              boxShadow={`4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 ${item.shadowColor} inset`}
              sx={{
                // ...(name === ''
                //   ? {
                //       background: 'black300',
                //       boxShadow:
                //         '4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 #9c9c9c inset',
                //     }
                //   : {
                //       background: item.bgColor,
                //       boxShadow: `4px 4px 0 rgba(255, 255, 255, 0.5) inset, -4px -4px 0 ${item.shadowColor} inset`,
                //     }),
                '&::before': {
                  content: "''",
                  display: 'block',
                  background: "url('./img/startBtn_highlight.svg')",
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'contain',
                  width: '28px',
                  height: '40px',
                  position: 'absolute',
                  inset: '10px auto auto 12px',
                },
              }}
            >
              {item.text}
            </Center>
            <Box
              w="calc(280px + 10px)"
              h="calc(80px + 10px)"
              bg="white"
              borderRadius="9999px"
              pos="absolute"
              inset="auto"
              boxShadow="0 4px 0 #D3D3D3"
            />
          </Flex>
        ))}
      </Flex>
    );
  };

  const StartNameInput = () => {
    return (
      <Box
        as="input"
        onChange={(e) => nameFunc(e)}
        defaultValue={name}
        placeholder="タッチして入力してね！"
        w="60vw"
        h="224px"
        fontSize="5rem"
        borderStyle="string"
        borderWidth="4px"
        borderColor="black200"
        borderRadius="16px"
        textAlign="center"
        textStyle="start"
      />
    );
  };
  const StartNameConfirm = () => {
    return (
      <Box
        as="input"
        value={name}
        readOnly
        w="30vw"
        h="224px"
        fontSize="5rem"
        borderStyle="string"
        borderWidth="4px"
        borderColor="black200"
        borderRadius="16px"
        textAlign="center"
        textStyle="start"
      />
    );
  };
  const StartNickNameInput = () => {
    return (
      <Flex gap="24px">
        {nicknameArray.map((item, i) => (
          <Center
            onClick={() => nicknameFunc(i)}
            key={item + i}
            borderColor="black200"
            textStyle="startNickname"
            sx={{
              ...(i === nicknameNumber && {
                borderColor: 'orange300',
              }),
            }}
          >
            {name}
            <br />
            {item}
          </Center>
        ))}
      </Flex>
    );
  };
  const StartNickNameConfirm = () => {
    return (
      <Center as="pre" borderColor="orange300" textStyle="startNickname">
        {displayNickname}
      </Center>
    );
  };
  const StartAgeInput = () => {
    return (
      <Center w="100vw" pos="relative">
        <Box
          className="ageArrayBox"
          w="100vw"
          overflow="scroll"
          transition="overflow 0.2s"
        >
          <Center
            // className="ageArray"
            w={`calc(176px * ${ageArray.length})`}
            m="0 calc(50vw - 176px / 2)"
          >
            {ageArray.map((item: number, i: number) => (
              <Center
                // onClick={() => ageFunc(i)}
                // onTouchStart={(e) => ageTouchStart(e)}
                // onTouchEnd={(e) => ageTouchEnd(e)}
                onTouchEnd={(e) => ageFunc(e)}
                key={item}
                w="176px"
                h="184px"
                fontSize="12rem"
                pos="relative"
                zIndex="3"
                // textStyle="startAge"
                // sx={{
                //   ...(i === ageIndex && {
                //     background: 'white',
                //     borderWidth: '10px',
                //     borderStyle: 'solid',
                //     borderColor: 'orange300',
                //   }),
                // }}
              >
                {item}
              </Center>
            ))}
          </Center>
        </Box>
        <Center
          // w="240px"
          background="white"
          borderWidth="10px"
          borderStyle="solid"
          borderColor="orange300"
          pos="absolute"
          inset="auto auto auto auto"
          textStyle="startAge"
        />
      </Center>
    );
  };
  const StartAgeConfirm = () => {
    return (
      <Flex alignItems="flex-end" gap="16px">
        <Center
          background="white"
          borderWidth="10px"
          borderStyle="solid"
          borderColor="orange300"
          textStyle="startAge"
        >
          {age}
        </Center>
        <Text>さい</Text>
      </Flex>
    );
  };
  const StartUseInput = () => {
    return (
      <Flex gap="24px">
        {useArray.map((item, i) => (
          <Center
            onClick={() => useFunc(i)}
            as="button"
            key={item + i}
            borderColor="black200"
            textStyle="startNickname"
            sx={{
              ...(i === use && {
                borderColor: 'orange300',
              }),
            }}
          >
            <Text as="pre" fontSize="4rem">
              {item}
            </Text>
          </Center>
        ))}
      </Flex>
    );
  };
  const StartUseConfirm = () => {
    return (
      <Center as="pre" borderColor="orange300" textStyle="startNickname">
        {useArray[use]}
      </Center>
    );
  };

  const startingQuestion: startingQuestionType[] = [
    {
      question: {
        heading: 'まずは、おなまえをおしえてね！',
        component: <StartNameInput />,
      },
      confirm: {
        heading: 'まずは、おなまえをおしえてね！',
        component: <StartNameConfirm />,
      },
    },
    {
      question: {
        heading: 'なんてよんだらいいかな？',
        component: <StartNickNameInput />,
      },
      confirm: {
        heading: 'よんでほしいのは',
        component: <StartNickNameConfirm />,
      },
    },
    {
      question: {
        heading: 'つぎに、なんさいかをおしえてね！',
        component: <StartAgeInput />,
      },
      confirm: {
        heading: `${nickname}のねんれいは`,
        component: <StartAgeConfirm />,
      },
    },
    {
      question: {
        heading: 'さいごに、だれがつかうかをおしえてね！',
        component: <StartUseInput />,
      },
      confirm: {
        heading: 'つかうのは',
        component: <StartUseConfirm />,
      },
    },
  ];

  return (
    <Flex
      w="100vw"
      h="100vh"
      bg="url('./img/start_bg.svg')"
      bgRepeat="repeat"
      overflow="hidden"
    >
      <Flex
        w={`calc(${startingQuestion.length} * 100vw)`}
        transform={`translateX(calc(-${slide} * 100vw))`}
        transition="transform 0.3s"
      >
        {startingQuestion.map((item, i) => (
          <Flex
            key={item.question.heading + i}
            fontSize="3.3rem"
            textStyle="start"
            sx={{
              '>div': {
                flexDirection: 'column',
                gap: '40px',
                width: '100vw',
                height: '100vh',
              },
            }}
          >
            <Center>
              <StartHeading data={item.question.heading} />
              {item.question.component}
              <StartBtn data={0} index={i} />
            </Center>
            <Center>
              <StartHeading data={item.confirm.heading} />
              <Flex gap="24px">
                {item.confirm.component}
                <StartConfirmText />
              </Flex>
              <StartBtn data={1} index={i} />
            </Center>
          </Flex>
        ))}
        <Center
          flexDirection="column"
          gap="72px"
          w="100vw"
          h="100vh"
          textStyle="start"
        >
          <Text fontSize="5rem">
            {use === 0 ? <>{nickname}</> : <>{nickname}のお母さんお父さん</>}
            <br />
            <>よろしくおねがいします！</>
          </Text>
          <Btn dataIndex={1} path={use === 0 ? 'child' : 'parents'} />
        </Center>
      </Flex>
    </Flex>
  );
};

export default Start;
