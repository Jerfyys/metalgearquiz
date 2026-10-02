const QUIZ_MODE="character";
const GAMES={
  "DS1": {
    "title": "Death Stranding",
    "cover": "ds1.jpg"
  },
  "DS2": {
    "title": "Death Stranding 2: On the Beach",
    "cover": "ds2.jpg"
  }
};
const QUOTES=[
  {
    "text": "We run, together. Like Mario and Princess ‘Beach.’",
    "speaker": "Amelie",
    "game": "DS1",
    "source": "https://gamefaqs.gamespot.com/boards/691087-playstation-4/78397826"
  },
  {
    "text": "Oh, you’re awake. So how does it feel? To be back in the world of the living? Don’t worry, I’m a doctor.",
    "speaker": "Deadman",
    "game": "DS1",
    "source": "https://siduece.uece.br/siduece/report?id=107365&tipo=3"
  },
  {
    "text": "The truth is, I’m Frankenstein’s monster.",
    "speaker": "Deadman",
    "game": "DS1",
    "source": "https://www.diva-portal.org/smash/get/diva2%3A1677654/FULLTEXT01.pdf"
  },
  {
    "text": "Poor thing was never truly alive, not in this world at least.",
    "speaker": "Deadman",
    "game": "DS1",
    "source": "https://thewhitepube.co.uk/games/death-stranding-final-walk/"
  },
  {
    "text": "As your friends, we would stop at nothing to see you succeed.",
    "speaker": "Deadman",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/prologue/"
  },
  {
    "text": "There is nothing left for you here. Nothing but sadness and regret. You can’t go on like this. Come take a walk with me.",
    "speaker": "Fragile",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-2-lou/"
  },
  {
    "text": "They told me your name was Sam Porter, but you are Sam Bridges. My son, my bridge to the future.",
    "speaker": "Cliff Unger",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "When I found out I was going to be a father, I was so scared. I had to be there for you and your mother, no matter what. I couldn’t just go off and get myself killed anymore. But I had it wrong. Being a father didn’t make me scared, it made me brave. Don’t make the same mistake. Be yourself. Be free.",
    "speaker": "Cliff Unger",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "I have no soul, no Beach. That’s why I try to connect myself with you. I am a Deadman.",
    "speaker": "Deadman",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "Pull the rope or cut the noose, but whatever you do, don’t hesitate.",
    "speaker": "Amelie",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "Don’t you just love this, Sam? Let the game resume.",
    "speaker": "Higgs",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "The name’s Higgs, the particle of God that permeates all existence.",
    "speaker": "Higgs",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "It’s funny, even when my heart stops the pain lingers. Do you have any family photographs, Sam?",
    "speaker": "Heartman",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1ce1oyw/"
  },
  {
    "text": "I’m Fragile… but I’m not that fragile.",
    "speaker": "Fragile",
    "game": "DS1",
    "source": "https://game-scripts-wiki.blogspot.com/2019/12/death-stranding-full-transcript.html"
  },
  {
    "text": "But instead you saved a city. And more than that, you gave people hope.",
    "speaker": "Sam Porter Bridges",
    "game": "DS1",
    "source": "https://game-scripts-wiki.blogspot.com/2019/12/death-stranding-full-transcript.html"
  },
  {
    "text": "To me, it matters less where I am than who I am with.",
    "speaker": "Dollman",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-6-chrysalis/"
  },
  {
    "text": "Friends and family don’t guarantee happiness. Not in the least.",
    "speaker": "Rainy",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-6-chrysalis/"
  },
  {
    "text": "You’re changing. That’s what living is. To change and to embrace change. To transform.",
    "speaker": "Fragile",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-7-pod/"
  },
  {
    "text": "Sorry to disappoint… but I don’t break that easily.",
    "speaker": "Higgs",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-9-puppets/"
  },
  {
    "text": "I remember now. The journey the two of us went on together. You and me, Sam. We will always be connected. I’m your Louise.",
    "speaker": "Tomorrow",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-16-tomorrow/"
  },
  {
    "text": "You’re a pharmakon. A medicine that can harm. A poison that can heal. It’s all in how you use it.",
    "speaker": "Fragile",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-4-raindrops/"
  },
  {
    "text": "For a friend in need. Death can’t tear us apart.",
    "speaker": "Deadman",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-12-fragile/"
  },
  {
    "text": "I’ll take the damage and the goods. I don’t break that easy.",
    "speaker": "Higgs",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-12-fragile/"
  },
  {
    "text": "See, I’m gonna crack open that Beach she sealed away and kick off the Last Stranding.",
    "speaker": "Higgs",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-13-die-hard/"
  },
  {
    "text": "Just promise you won’t throw me anywhere… weird.",
    "speaker": "Dollman",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-3-drawbridge/"
  },
  {
    "text": "You will never be alone, we will always be with you.",
    "speaker": "Fragile",
    "game": "DS2",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1n3hrzf/quotes_you_loved_from_ds2/"
  },
  {
    "text": "You know why they call me Die-Hardman? Because he wouldn’t let me die. He brought my sorry ass home every time. And I loved him, as much as I loved her.",
    "speaker": "Die-Hardman",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1sitbpx/"
  },
  {
    "text": "This gun won’t help you here. Those are her words, not mine.",
    "speaker": "Sam Porter Bridges",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/k1v6rt/"
  },
  {
    "text": "A cryptobiote a day keeps the timefall away.",
    "speaker": "Fragile",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/159fmc1/"
  },
  {
    "text": "I did, and I didn’t. I had so many dreams of the future. I didn’t know which ones to trust.",
    "speaker": "Amelie",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1886eyc/"
  },
  {
    "text": "Killing you would be a mistake. I know that better than anyone.",
    "speaker": "Amelie",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1886eyc/"
  },
  {
    "text": "Once there was an explosion, a bang which gave birth to time and space.",
    "speaker": "Sam Porter Bridges",
    "game": "DS1",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1w75akc/"
  },
  {
    "text": "For the sake of the future, we must all come together. As a barrier to the bad, and a gateway to the good.",
    "speaker": "Fragile",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-14-last-stranding/"
  },
  {
    "text": "Sam. Sam! I’m so sorry… I tried to protect them. I’m sorry. From Lucy… For you. Keep Lou safe…",
    "speaker": "Neil Vana",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-11-quake/"
  },
  {
    "text": "Can’t get by without a ‘stick’ in the end. Even you gotta face facts.",
    "speaker": "Higgs",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-15-on-the-beach/"
  },
  {
    "text": "Fuck you… and your band!",
    "speaker": "Sam Porter Bridges",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-15-on-the-beach/"
  },
  {
    "text": "There are people out there who need help, Sam. Whenever you’re ready to face what’s next… Summon your strength and get to it.",
    "speaker": "Dollman",
    "game": "DS2",
    "source": "https://www.dawnborn.com/game-transcripts/death-stranding-2-game-transcript-all-dialogues/episode-10-isolation/"
  },
  {
    "text": "Guns and violence, the whole damn world can be yours. Same as it ever was.",
    "speaker": "Higgs",
    "game": "DS2",
    "source": "https://www.reddit.com/r/DeathStranding/comments/1n3hrzf/quotes_you_loved_from_ds2/"
  }
];
