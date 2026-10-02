const GAMES={
MGS1:{title:'Metal Gear Solid',year:1998,cover:'mgs1.jpg'},
MGS2:{title:'Metal Gear Solid 2: Sons of Liberty',year:2001,cover:'mgs2.jpg'},
MGS3:{title:'Metal Gear Solid 3: Snake Eater',year:2004,cover:'mgs3.jpg'},
MGS4:{title:'Metal Gear Solid 4: Guns of the Patriots',year:2008,cover:'mgs4.jpg'},
PW:{title:'Metal Gear Solid: Peace Walker',year:2010,cover:'pw.jpg'},
GZ:{title:'Metal Gear Solid V: Ground Zeroes',year:2014,cover:'gz.jpg'},
TPP:{title:'Metal Gear Solid V: The Phantom Pain',year:2015,cover:'tpp.png'},
RISING:{title:'Metal Gear Rising: Revengeance',year:2013,cover:'rising.jpg'}};
const QUOTES=[
  {
    "text": "You're being silly! What we propose to do is not to control content, but to create context.",
    "speaker": "Rose AI",
    "game": "MGS2",
    "source": "https://gamefaqs.gamespot.com/ps2/914506-the-document-of-metal-gear-solid-2/faqs/27630"
  },
  {
    "text": "Do you know what day it is tomorrow?",
    "speaker": "Rose",
    "game": "MGS2",
    "source": "https://gamefaqs.gamespot.com/ps2/914506-the-document-of-metal-gear-solid-2/faqs/27630"
  },
  {
    "text": "Jack, do you remember the day we met?",
    "speaker": "Rose",
    "game": "MGS2",
    "source": "https://gamefaqs.gamespot.com/ps2/914506-the-document-of-metal-gear-solid-2/faqs/27630"
  },
  {
    "text": "I know you didn't have much in terms of choices this time, but everything you felt, thought about during this mission is yours, and what you decide to do with them is your choice.",
    "speaker": "Solid Snake",
    "game": "MGS2",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/3to7pg/solid_snakes_speech_from_mgs2_sounds_strangely/"
  },
  {
    "text": "Yeah, a clean slate and a new name. New memories. Choose your own legacy. It's for you to decide. It's up to you.",
    "speaker": "Solid Snake",
    "game": "MGS2",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/3to7pg/solid_snakes_speech_from_mgs2_sounds_strangely/"
  },
  {
    "text": "Memories aren't just sounds and pictures. They exist somewhere between the sounds, between the pictures.",
    "speaker": "Solid Snake",
    "game": "MGS2",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1fnsma7/can_someone_tell_me_a_serious_quote_from_solid/"
  },
  {
    "text": "All I want is to be remembered.",
    "speaker": "Solidus Snake",
    "game": "MGS2",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_2:_Sons_of_Liberty"
  },
  {
    "text": "Raiden, turn the game console off right now!",
    "speaker": "Colonel AI",
    "game": "MGS2",
    "source": "https://metalgear.fandom.com/wiki/Metal_Gear_Solid_2_radio_conversations"
  },
  {
    "text": "Stop it! I'm not a weapon!!",
    "speaker": "Raiden",
    "game": "MGS2",
    "source": "https://metalgear.fandom.com/wiki/Metal_Gear_Solid_2_radio_conversations"
  },
  {
    "text": "Battle brings death. Death brings sorrow.",
    "speaker": "The Sorrow",
    "game": "MGS3",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_3:_Snake_Eater"
  },
  {
    "text": "Loyalty to your country, or loyalty to me?",
    "speaker": "The Boss",
    "game": "MGS3",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_3:_Snake_Eater"
  },
  {
    "text": "She was a true patriot.",
    "speaker": "EVA",
    "game": "MGS3",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_3:_Snake_Eater"
  },
  {
    "text": "The world is born... from zero.",
    "speaker": "Big Boss",
    "game": "MGS4",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear"
  },
  {
    "text": "Restraint is a virtue.",
    "speaker": "Skull Face",
    "game": "GZ",
    "source": "https://metalgear.fandom.com/wiki/Metal_Gear_Solid_V:_Ground_Zeroes/Cassette_Transcripts"
  },
  {
    "text": "First Big Boss, then Zero.",
    "speaker": "Skull Face",
    "game": "GZ",
    "source": "https://metalgear.fandom.com/wiki/Metal_Gear_Solid_V:_Ground_Zeroes/Cassette_Transcripts"
  },
  {
    "text": "Why are we still here? Just to suffer?",
    "speaker": "Kazuhira Miller",
    "game": "TPP",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_V:_The_Phantom_Pain"
  },
  {
    "text": "You're all diamonds.",
    "speaker": "Venom Snake",
    "game": "TPP",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_V:_The_Phantom_Pain"
  },
  {
    "text": "Such a lust for revenge! Who?",
    "speaker": "Skull Face",
    "game": "TPP",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_V:_The_Phantom_Pain"
  },
  {
    "text": "I'm saying Jack is back.",
    "speaker": "Raiden",
    "game": "RISING",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Rising:_Revengeance"
  },
  {
    "text": "I'll take this dance.",
    "speaker": "Jetstream Sam",
    "game": "RISING",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Rising:_Revengeance"
  },
  {
    "text": "The arms race never ends, huh?",
    "speaker": "Raiden",
    "game": "RISING",
    "source": "https://metalgear.fandom.com/wiki/Metal_Gear_Rising:_Revengeance_radio_conversations"
  },
  {
    "text": "Six bullets. More than enough to kill anything that moves.",
    "speaker": "Revolver Ocelot",
    "game": "MGS1",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_(1998_video_game)"
  },
  {
    "text": "We have no past, no future. We live in the moment.",
    "speaker": "Psycho Mantis",
    "game": "MGS1",
    "source": "https://en.wikiquote.org/wiki/Metal_Gear_Solid_(1998_video_game)"
  },
  {
    "text": "I am lightning. The rain transformed.",
    "speaker": "Raiden",
    "game": "MGS4",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/bsyocw/"
  },
  {
    "text": "You were the lightning in that rain. You can still shine through the darkness.",
    "speaker": "Old Snake",
    "game": "MGS4",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1aid735/"
  },
  {
    "text": "War has changed. It’s no longer about nations, ideologies, or ethnicity. It’s an endless series of proxy battles fought by mercenaries and machines.",
    "speaker": "Old Snake",
    "game": "MGS4",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cnquww/war_has_changed/"
  },
  {
    "text": "Life isn't just about passing on your genes. We can leave behind much more than just DNA.",
    "speaker": "Solid Snake",
    "game": "MGS2",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1ulqvv8/removed/"
  },
  {
    "text": "I'm no hero, never was, never will be. I'm just an old killer, hired to do some wetwork.",
    "speaker": "Old Snake",
    "game": "MGS4",
    "source": "https://gamefaqs.gamespot.com/boards/718564-metal-gear-solid-v-the-phantom-pain/72375277"
  },
  {
    "text": "A strong man doesn't need to read the future. He makes his own.",
    "speaker": "Solid Snake",
    "game": "MGS1",
    "source": "https://mygeekwisdom.com/2020/01/04/a-strong-man-doesnt-need-to-read-the-future-he-makes-his-own/"
  },
  {
    "text": "Do you think love can bloom, even on a battlefield?",
    "speaker": "Otacon",
    "game": "MGS1",
    "source": "https://www.gamespot.com/articles/what-is-your-all-time-favorite-video-game-quote-ga/1100-6428590/"
  },
  {
    "text": "Is there such a thing as an absolute, timeless enemy? There is no such thing, and never has been.",
    "speaker": "The Boss",
    "game": "MGS3",
    "source": "https://goombastomp.com/metal-gear-solid-3-a-perfect-circle/"
  },
  {
    "text": "I said my sword was a tool of justice. Not used in anger. Not used for vengeance.",
    "speaker": "Raiden",
    "game": "RISING",
    "source": "https://www.reddit.com/r/waifuism/comments/cs5ixd/"
  },
  {
    "text": "Free will is a myth. Religion is a joke. We are all pawns, controlled by something greater: Memes. The DNA of the soul.",
    "speaker": "Monsoon",
    "game": "RISING",
    "source": "https://www.reddit.com/r/metalgearrising/comments/wiirf5/"
  },
  {
    "text": "We're not tools of the government, or anyone else. Fighting was the only thing... the only thing I was good at.",
    "speaker": "Gray Fox",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xy5l6v"
  },
  {
    "text": "You know a lot about science, but you don't know how good a cigarette tastes in the morning.",
    "speaker": "Solid Snake",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1w01twl/giveaway_pc_metal_gear_solid_master_collection/"
  },
  {
    "text": "That's it, hand to hand. It is the basis of all combat. Only a fool trusts his life to a weapon.",
    "speaker": "Gray Fox",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1bm6y6t"
  },
  {
    "text": "Jack, listen to me. We're all born with an expiration date. No one lasts forever. Life is nothing but a grace period.",
    "speaker": "Solidus Snake",
    "game": "MGS2",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1bm6y6t"
  },
  {
    "text": "Don't obsess over the words so much. Find the meaning behind the words, then decide.",
    "speaker": "Solid Snake",
    "game": "MGS2",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/144e56c"
  },
  {
    "text": "We need to pass the torch... and let our children read our messy and sad history by its light.",
    "speaker": "Solid Snake",
    "game": "MGS2",
    "source": "https://www.neogaf.com/threads/flashback-how-metal-gear-solid-2-foretold-our-post-truth-future.1316133/post-224774343"
  },
  {
    "text": "Enemies change along with the times, and the flow of the ages. And we soldiers are forced to play along.",
    "speaker": "The Boss",
    "game": "MGS3",
    "source": "https://gamefaqs.gamespot.com/boards/914828-metal-gear-solid-3-snake-eater/49457129"
  },
  {
    "text": "As long as we have 'loyalty to the end', there's no point in believing in anything...even in those we love.",
    "speaker": "The Boss",
    "game": "MGS3",
    "source": "https://www.neoseeker.com/mgs3/faqs/134223-metal-gear-solid-3-sub-script.html"
  },
  {
    "text": "It's not about changing the world. It's about doing our best to leave the world the way it is.",
    "speaker": "Big Boss",
    "game": "MGS4",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "text": "Not a chance. This is the real world, not some fantasy game.",
    "speaker": "Old Snake",
    "game": "MGS4",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/mva37r"
  },
  {
    "text": "We will forsake our countries. We will leave our motherlands behind us and become one with this earth.",
    "speaker": "Big Boss",
    "game": "PW",
    "source": "https://www.imdb.com/title/tt1531061/quotes/"
  },
  {
    "text": "I was made to fight. I am a gun. Just point me at your enemy and pull the trigger.",
    "speaker": "Big Boss",
    "game": "PW",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1jne8fb"
  },
  {
    "text": "The Boss threw down her gun, and with it her life's calling. You - her disciple - have never been able to do that.",
    "speaker": "Paz",
    "game": "PW",
    "source": "https://www.reddit.com/r/tipofmytongue/comments/1rne0do/tomtmovieshow_scene_from_a_movie_or_show_where_a/"
  },
  {
    "text": "Revolution or no revolution, you pick up a gun, and sooner or later you're going to hell. You prepared for that?",
    "speaker": "Big Boss",
    "game": "PW",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1fo2201/tell_me_a_badass_quote_from_big_boss/"
  },
  {
    "text": "It's a good gun, I'll give you that. But the engraving gives you no tactical advantage whatsoever.",
    "speaker": "Naked Snake",
    "game": "MGS3",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1fo2201/tell_me_a_badass_quote_from_big_boss/"
  },
  {
    "text": "How's it feel to play the traitor? No more war games, you're a real man now, soldier...",
    "speaker": "Skull Face",
    "game": "GZ",
    "source": "https://villains.fandom.com/wiki/Skull_Face_(Metal_Gear)"
  },
  {
    "text": "Give it back! That wasn't right, that was ours! We built it, dammit!",
    "speaker": "Kazuhira Miller",
    "game": "GZ",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/ocoezt"
  },
  {
    "text": "I won't scatter your sorrow to the heartless sea. I will always be with you. Plant your roots in me.",
    "speaker": "Venom Snake",
    "game": "TPP",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/mva37r"
  },
  {
    "text": "Men will fight for reasons they don't understand, causes they don't believe in... But at least I'll leave a worthy successor... You, Jack.",
    "speaker": "Senator Armstrong",
    "game": "RISING",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xy5l6v"
  },
  {
    "text": "I won't die. ...as long as you still live.",
    "speaker": "Liquid Snake",
    "game": "MGS1",
    "source": "https://gamefaqs.gamespot.com/ps/197909-metal-gear-solid/faqs/26783"
  },
  {
    "text": "Just because you've destroyed Metal Gear doesn't mean I'm done fighting.",
    "speaker": "Liquid Snake",
    "game": "MGS1",
    "source": "https://gamefaqs.gamespot.com/ps/197909-metal-gear-solid/faqs/26783"
  },
  {
    "text": "Now I could see war not from inside, but from the outside, as an observer.",
    "speaker": "Sniper Wolf",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1qj7331/the_governments_of_the_world_turned_a_blind_eye/"
  },
  {
    "text": "I watched the brutality, the stupidity of mankind through the scope of my rifle.",
    "speaker": "Sniper Wolf",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1qj7331/the_governments_of_the_world_turned_a_blind_eye/"
  },
  {
    "text": "Genes exist to pass down our hopes and dreams for the future through our children. Living is a link to the future.",
    "speaker": "Naomi Hunter",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/6k8t8s"
  },
  {
    "text": "I was a fool. I wanted to be a soldier... But war is ugly... There's nothing glamorous about it.",
    "speaker": "Meryl Silverburgh",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/sfz3sy/question_what_scene_in_metal_gear_makes_you_cry/"
  },
  {
    "text": "Snake, what was she fighting for? What am I fighting for? What are you fighting for?",
    "speaker": "Otacon",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1k1doyl"
  },
  {
    "text": "Everything she did, she did for her country. She sacrificed her life and her honor for her native land.",
    "speaker": "EVA",
    "game": "MGS3",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/s098cs"
  },
  {
    "text": "Who's afraid of a little thunder?",
    "speaker": "Colonel Volgin",
    "game": "MGS3",
    "source": "https://en.wikiquote.org/wiki/Last_words_in_Metal_Gear_series_games"
  },
  {
    "text": "My name is Helena Dolph Jackson, the daughter of a proud and noble soldier!",
    "speaker": "Fortune",
    "game": "MGS2",
    "source": "https://en.wikiquote.org/wiki/Last_words_in_Metal_Gear_series_games"
  },
  {
    "text": "I love to reload during a battle. There's nothing like the feeling of slamming a long silver bullet into a well greased chamber...",
    "speaker": "Revolver Ocelot",
    "game": "MGS1",
    "source": "https://steamcommunity.com/sharedfiles/filedetails/?id=1612346823"
  },
  {
    "text": "The path you walk on has no end. Each step you take is paved with the corpses of your enemies...",
    "speaker": "Vulcan Raven",
    "game": "MGS1",
    "source": "https://metalgear.fandom.com/wiki/Vulcan_Raven"
  },
  {
    "text": "I am the greatest that humanity has to offer, and the lowest.",
    "speaker": "Fatman",
    "game": "MGS2",
    "source": "https://www.imdb.com/title/tt0249008/characters/nm0219336/"
  },
  {
    "text": "Go ahead, shoot me, I'm already dead.",
    "speaker": "Fatman",
    "game": "MGS2",
    "source": "https://www.imdb.com/title/tt0249008/characters/nm0219336/"
  },
  {
    "text": "How about it undying man? Care to die too?",
    "speaker": "Vamp",
    "game": "MGS4",
    "source": "https://www.imdb.com/title/tt0462423/characters/nm0482851/"
  },
  {
    "text": "But can you kill this mere mortal?",
    "speaker": "Vamp",
    "game": "MGS4",
    "source": "https://www.imdb.com/title/tt0462423/characters/nm0482851/"
  },
  {
    "text": "If you would kill for your ideals then surely you are ready to die for them!",
    "speaker": "Mistral",
    "game": "RISING",
    "source": "https://vgcw.fandom.com/wiki/Mistral"
  },
  {
    "text": "Is your cause just, or is that just what you tell yourself?",
    "speaker": "Jetstream Sam",
    "game": "RISING",
    "source": "https://www.nexusmods.com/fallout4/images/258435"
  },
  {
    "text": "Like I said, kids are cruel, Jack. And I'm very in touch with my inner child.",
    "speaker": "Sundowner",
    "game": "RISING",
    "source": "https://knowyourmeme.com/memes/like-i-said-kids-are-cruel-jack"
  },
  {
    "text": "Nanomachines, son. They harden in response to physical trauma.",
    "speaker": "Senator Armstrong",
    "game": "RISING",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xy5l6v"
  },
  {
    "text": "I grew up on the battlefield. Conflict and victory were my parents.",
    "speaker": "Olga Gurlukovich",
    "game": "MGS2",
    "source": "https://metalgear.fandom.com/wiki/Olga_Gurlukovich"
  },
  {
    "text": "Yes. The inferior one was the winner after all. ...That's right. Until the very end, Liquid thought he was the inferior one.",
    "speaker": "Revolver Ocelot",
    "game": "MGS1",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/89lrsn/solid_and_liquid_inferior_and_superior_and/"
  },
  {
    "text": "I chose the language of gratitude instead, and go back to silence. I am Quiet... I am... The absence of words.",
    "speaker": "Quiet",
    "game": "TPP",
    "source": "https://bura.brunel.ac.uk/bitstream/2438/27701/5/FullText.pdf"
  },
  {
    "game": "MGS1",
    "speaker": "Gray Fox",
    "text": "A cornered fox is more dangerous than a jackal!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/bqp7hk"
  },
  {
    "game": "MGS4",
    "speaker": "Big Boss",
    "text": "And for that reason... I'm taking it upon myself to send Zero... Back to nothing.",
    "source": "https://gamefaqs.gamespot.com/ps3/926596-metal-gear-solid-4-guns-of-the-patriots/faqs/53154"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "There are no heroes in war. The only heroes I know are either dead or in prison. One or the other.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "I'm just a man who's good at what he does: Killing.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "Everybody feels sick the first time they kill someone. Unfortunately, killing is one of those things that gets easier the more you do it.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1fnsma7/can_someone_tell_me_a_serious_quote_from_solid/"
  },
  {
    "game": "MGS1",
    "speaker": "Vulcan Raven",
    "text": "You and the boss are not of this world. A world I do not wish to know.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS2",
    "speaker": "Ocelot",
    "text": "There's no such thing as miracles, or the supernatural. Only cutting-edge technology.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS2",
    "speaker": "Solid Snake",
    "text": "Find something to believe in, and find it for yourself. And when you do, pass it on to the future.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS3",
    "speaker": "The Boss",
    "text": "Light is but a farewell gift from the darkness to those on their way to die. I've been waiting, Snake, for a long time. Waiting for your birth, your growth, and the finality of today.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/gofqn5"
  },
  {
    "game": "MGS3",
    "speaker": "The Boss",
    "text": "Try to remember some of the basics of CQC.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS3",
    "speaker": "Volgin",
    "text": "One hundred billion dollars! Divided up and hidden all over the world!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS3",
    "speaker": "Ocelot",
    "text": "Twelve shots... This time I've got twelve shots.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "PW",
    "speaker": "Big Boss",
    "text": "Chico, growing up means choosing how you're gonna live your life. To do the right thing, you sometimes have to leave the things you care about behind. Parents, family, your homeland.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xmxjas/which_metal_gear_solid_quote_do_you_will_take/"
  },
  {
    "game": "PW",
    "speaker": "Big Boss",
    "text": "We have no nation, no philosophy, no ideology. We go where we're needed, fighting not for country, not for government, but for ourselves. We need no reason to fight. We fight because we are needed.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "TPP",
    "speaker": "Kazuhira Miller",
    "text": "We hold our rifles in missing hands. We stand tall on missing legs. We stride forward on the bones of our fallen. Then, and only then, are we alive.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "TPP",
    "speaker": "Venom Snake",
    "text": "I'm already a demon. Heaven's not my kind of place, anyway.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS4",
    "speaker": "Big Boss",
    "text": "I never thought of you as a son. But I always respected you as a soldier. And as a man.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "I don't have any family. No, wait, there was a man who said he was my father.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "MGS4",
    "speaker": "Otacon",
    "text": "Huh? Oh, wait! We're on PlayStation 3! It's a Blu-ray Disc. Dual-layered, too. No need to swap.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "MGS1",
    "speaker": "Psycho Mantis",
    "text": "It's strange. I've never used my powers to help someone. It feels... kind of... nice...",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/lr59bh"
  },
  {
    "game": "MGS1",
    "speaker": "Psycho Mantis",
    "text": "So you like Castlevania, don't you?",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/14gn3qg"
  },
  {
    "game": "TPP",
    "speaker": "Skull Face",
    "text": "I was invaded by words, burrowing and breeding inside me. A philosopher once said: 'It is no nation we inhabit, but a language.'",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1ohd7fm"
  },
  {
    "game": "RISING",
    "speaker": "Raiden",
    "text": "If America's gone to shit, you're just another maggot crawling in the pile.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "RISING",
    "speaker": "Senator Armstrong",
    "text": "I have a dream. That one day every person in this nation will control their own destiny.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xmxjas/which_metal_gear_solid_quote_do_you_will_take/"
  },
  {
    "game": "RISING",
    "speaker": "Senator Armstrong",
    "text": "I'm using war as a business to get elected... so I can end war as a business!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xmxjas/which_metal_gear_solid_quote_do_you_will_take/"
  },
  {
    "game": "RISING",
    "speaker": "Jetstream Sam",
    "text": "The lock on my blade will deactivate in two hours. What happens after that, I leave to you, Wolfy.",
    "source": "https://www.reddit.com/r/metalgearrising/comments/173xrff"
  },
  {
    "game": "RISING",
    "speaker": "Blade Wolf",
    "text": "Wordplay. My exoskeleton resembles a canine. Canines enjoy bones. Amusing on two levels.",
    "source": "https://www.reddit.com/r/metalgearrising/comments/wb4vt7"
  },
  {
    "game": "RISING",
    "speaker": "Blade Wolf",
    "text": "I possess an intellect far beyond human reckoning.",
    "source": "https://www.reddit.com/r/metalgearrising/comments/wb4vt7"
  },
  {
    "game": "MGS2",
    "speaker": "Raiden",
    "text": "We're out here, we bleed, we die!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1qccjh2/what_are_your_favorite_metal_gear_quotes/"
  },
  {
    "game": "MGS3",
    "speaker": "Naked Snake",
    "text": "The earth was blue, but there was no God.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/18phcth/the_earth_was_blue_but_there_was_no_god/"
  },
  {
    "game": "MGS4",
    "speaker": "Solid Snake",
    "text": "Otacon, even the dead have ears.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1cckv5j/what_do_you_think_is_the_most_underrated_line_in/"
  },
  {
    "game": "RISING",
    "speaker": "Sundowner",
    "text": "Africa's just getting a bit too peaceful. How's an honest warmonger supposed to make a living?",
    "source": "https://www.reddit.com/r/metalgearrising/comments/w74x0w"
  },
  {
    "game": "RISING",
    "speaker": "Sundowner",
    "text": "Did you think every war was part of some big ol' conspiracy? Bullshit! War's just a part of who we are. Why fight it?",
    "source": "https://www.reddit.com/r/metalgearrising/comments/w74x0w"
  },
  {
    "game": "RISING",
    "speaker": "Monsoon",
    "text": "How easily you ignore the loss of life when it suits your convenience.",
    "source": "https://www.reddit.com/r/metalgearrising/comments/15aoeeo"
  },
  {
    "game": "RISING",
    "speaker": "Monsoon",
    "text": "Expose someone to anger long enough, they will learn to hate. They become a carrier. Envy, greed, despair... All memes. All passed along.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xy5l6v"
  },
  {
    "game": "RISING",
    "speaker": "Monsoon",
    "text": "You can't fight nature, Jack. Wind blows, rain falls, and the strong prey upon the weak.",
    "source": "https://www.reddit.com/r/copypasta/comments/tn4cm3"
  },
  {
    "game": "MGS2",
    "speaker": "Solid Snake",
    "text": "Building the future and keeping the past alive are one and the same thing.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1f26por"
  },
  {
    "game": "MGS3",
    "speaker": "The Boss",
    "text": "Politics, economics, the arms race - they're all just arenas for meaningless competition. I'm sure you can see that. But the Earth itself has no boundaries. No East, no West, no Cold War.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1vdf8zm/writing_my_dissertation_about_metal_gear_solid/"
  },
  {
    "game": "GZ",
    "speaker": "Kazuhira Miller",
    "text": "They played us like a damn fiddle!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "MGS3",
    "speaker": "Ocelot",
    "text": "You're not a snake and I'm not an ocelot. We're men, with names.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xmxjas/which_metal_gear_solid_quote_do_you_will_take/"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "Life is worth living, even if it hurts you, even if you hurt in it.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/xmxjas/which_metal_gear_solid_quote_do_you_will_take/"
  },
  {
    "game": "MGS1",
    "speaker": "Naomi Hunter",
    "text": "You mustn't allow yourself to be chained to fate. Humans can choose the type of life they want to live.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1tak5os/a_late_understanding_of_metal_gear_solid_1s_ending/"
  },
  {
    "game": "TPP",
    "speaker": "Code Talker",
    "text": "Secret meetings between containers, in broad daylight? The Ocelots' aim is off today.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/1r861jz/eyes_on_kazuhira_explained/"
  },
  {
    "game": "MGS1",
    "speaker": "Mei Ling",
    "text": "Rashness brings success to few, misfortune to many.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/kh6ds2"
  },
  {
    "game": "MGS2",
    "speaker": "Solidus Snake",
    "text": "Jack, those days during the civil war were as real as they come... Every day was absolute, split between life and death. You ran from it, and now, you've been led back to war by something less than real.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/gd56a4"
  },
  {
    "game": "MGS3",
    "speaker": "The End",
    "text": "I beg of you, grant me the strength to take this final prey. Let me linger in the world just a little longer.",
    "source": "https://gamefaqs.gamespot.com/ps2/914828-metal-gear-solid-3-snake-eater/faqs/34684"
  },
  {
    "game": "MGS3",
    "speaker": "The Fury",
    "text": "I came back from space. As I returned, I had one vision - the world set ablaze.",
    "source": "https://villains.fandom.com/wiki/The_Fury_%28Metal_Gear_Solid%29"
  },
  {
    "game": "PW",
    "speaker": "Strangelove",
    "text": "Survival requires pragmatic thought and action. But, you still must retain your ideals.",
    "source": "https://gamefaqs.gamespot.com/psp/960566-metal-gear-solid-peace-walker/faqs/60243?print=1"
  },
  {
    "game": "PW",
    "speaker": "Paz",
    "text": "So to achieve peace, we have to create it ourselves. Crying about it won't bring it about, or make it last.",
    "source": "https://www.quotes.net/mquote/1040611"
  },
  {
    "game": "PW",
    "speaker": "Big Boss",
    "text": "I'll pass. I'm not gonna leave my life up to somebody else's judgment. Especially not a machine.",
    "source": "https://metalgear.fandom.com/wiki/Metal_Gear_Solid%3A_Peace_Walker_briefing_files"
  },
  {
    "game": "TPP",
    "speaker": "Major Zero",
    "text": "I probably won't be around. I'll be somewhere even you can't find me. A tombstone chiseled into the code of a machine. That is all I'll leave to mark my existence.",
    "source": "https://www.reddit.com/r/NeverBeGameOver/comments/dd47by"
  },
  {
    "game": "MGS4",
    "speaker": "Drebin",
    "text": "War transforms us, Snake... Into beasts.",
    "source": "https://www.reddit.com/r/NeverBeGameOver/comments/dd47by"
  },
  {
    "game": "MGS2",
    "speaker": "Colonel AI",
    "text": "Raiden, something happened to me last Thursday when I was driving home. I had a couple of miles to go - I looked up and saw a glowing orange object in the sky, to the east! It was moving very irregularly... Suddenly, there was intense light all around me - and when I came to, I was home. What do you think happened to me?",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/hv6z44"
  },
  {
    "game": "TPP",
    "speaker": "Big Boss",
    "text": "Now do you remember? Who you are? What you were meant to do? I cheated death, thanks to you. And thanks to you I've left my mark. You have too - you've written your own history. You're your own man.",
    "source": "https://www.reddit.com/r/copypasta/comments/kufax1"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "Never doubt yourself. Just let it make you stronger. Learn something from it.",
    "source": "https://belle2.ifj.edu.pl/Jacek-Stypula/MGS.pdf"
  },
  {
    "game": "MGS1",
    "speaker": "Solid Snake",
    "text": "I just didn't expect a world-class designer of military technology to be so... cute.",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/y0w2bb"
  },
  {
    "game": "MGS1",
    "speaker": "Meryl Silverburgh",
    "text": "You're a sad, lonely man.",
    "source": "https://belle2.ifj.edu.pl/Jacek-Stypula/MGS.pdf"
  },
  {
    "game": "MGS4",
    "speaker": "Drebin",
    "text": "I'm a weapons wholesaler - all shapes, all sizes. But there's no need to worry, 'cause all my shit's been laundered.",
    "source": "https://www.ideals.illinois.edu/items/42310/bitstreams/127471/data.pdf"
  },
  {
    "game": "TPP",
    "speaker": "Kazuhira Miller",
    "text": "This is the enemy! And he's here on his knees! He didn't lose a damn thing!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/yiaswh"
  },
  {
    "game": "RISING",
    "speaker": "Monsoon",
    "text": "So tell me: Who saves the weak from the man who saves the weak?",
    "source": "https://www.reddit.com/r/copypasta/comments/tn4cm3"
  },
  {
    "game": "MGS2",
    "speaker": "Colonel AI",
    "text": "I hear it's amazing when the famous purple stuffed worm in flap-jaw space with the tuning fork does a raw blink on Hara-kiri Rock. I need scissors! 61!",
    "source": "https://www.reddit.com/r/metalgearsolid/comments/12zacz1"
  },
  {
    "game": "MGS4",
    "speaker": "Big Boss",
    "source": "https://gamefaqs.gamespot.com/ps3/926596-metal-gear-solid-4-guns-of-the-patriots/faqs/53154",
    "text": "Everything has its beginning. But it doesn't start at one. It starts long before that - in chaos. The world is born - from zero. The moment zero becomes one is the moment the world springs to life. One becomes two, two becomes 10, 10 becomes 100. Taking it all back to one solves nothing. So long as zero remains, one will eventually grow to 100 again."
  },
  {
    "game": "MGS4",
    "speaker": "Big Boss",
    "source": "https://gamefaqs.gamespot.com/ps3/926596-metal-gear-solid-4-guns-of-the-patriots/faqs/53154",
    "text": "This is good, isn't it?"
  },
  {
    "game": "MGS4",
    "speaker": "Liquid Ocelot",
    "source": "https://gamefaqs.gamespot.com/ps3/926596-metal-gear-solid-4-guns-of-the-patriots/faqs/53154",
    "text": "This is the liberty we've won for ourselves: Outer Haven! And with this weapon I will destroy JD, and then everything ends, and everything begins!"
  }
];
