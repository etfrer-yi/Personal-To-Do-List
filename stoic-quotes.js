let quotes = [//courtesy of amandeepmittal/stoic-api
  "It is impossible for a man to learn what he thinks he already knows. - Epictetus",
  "We all love ourselves more than other people, but care more about their opinion than our own. - Marcus Aurelius",
  "You shouldn't give circumstances the power to rouse anger, for they don't care at all. - Marcus Aurelius",
  "Your mind will take the shape of what you frequently hold in thought for the human spirit is colored by such impressions. - Marcus Aurelius",
  "To live the good life: We have the potential for it. If we can learn to be indifferent to what makes no difference. - Marcus Aurelius",
  "We have two ears and one mouth so that we can listen twice as much as we speak - Epictetus",
  "Never let the future disturb you. You will meet it, if you have to, with the same weapons of reason which today arm you against the present.",
  "It is the power of the mind to be unconquerable. - Seneca",
  "Sometimes even to live is an act of courage. ― Seneca",
  "Luck is what happens when preparation meets opportunity. ― Seneca",
  "Difficulties strengthen the mind, as labor does the body. ― Seneca",
  "There is no easy way from the earth to the stars― Seneca",
  "Hang on to your youthful enthusiasms -- you’ll be able to use them better when you’re older. ― Seneca",
  "Begin at once to live, and count each separate day as a separate life. ― Seneca",
  "No man was ever wise by chance ― Seneca",
  "We suffer more often in imagination than in reality ― Seneca",
  "Most powerful is he who has himself in his own power. ― Seneca",
  "As long as you live, keep learning how to live. ― Seneca",
  "It is difficult to bring people to goodness with lessons, but it is easy to do so by example. ― Seneca",
  "There is no good or bad without us, there is only perception. There is the event itself and the story we tell ourselves about what it means.",
  "In life, it doesn’t matter what happens to you or where you came from. It matters what you do with what happens & what you’ve been given.",
  "Serenity and stability are results of your choices and judgement, not your environment.",
  "Having an end in mind, is no guarantee that you'll reach it, but not having an end in mind is a guarantee you won't.",
  "We must give up things to which we are addicted considering them to be good. Otherwise courage will vanish which should test itsef. - Seneca",
  "Your principles can't be extinguished unless you snuff out the thoughts that feed them. - Marcus Aurelius",
  "It's possible to start living again! See things anew as you once did. That is how to restart life! - Marcus Aurelius",
  "A real man doesn't give way to anger & discontent & such a person has strength, courage & endurance unlike the angry and complaining. - Marcus Aurelius",
  "Who then is invincible? The one who cannot be upset by anything outside their reasoned choice. - Epictetus",
  "For to be wise is only one thing- to fix our attention on our intelligence which guides all things everywhere. - Heraclitus",
  "You shouldn't give circumstances the power to rouse anger, for they don't care at all. - Marcus Aurelius",
  "Your mind will take the shape of what you frequently hold in thought. - Marcus Aurelius",
  "Your mind is truly yours. - Marcus Aurelius",
  "First tell yourself what kind of perosn you want to be, then do what you have to do. - Marcus Aurelius",
  "If you want some good, get it from yourself. - Epictetus",
  "Where is Good? In our reasoned choices. Where is evil? In our reasoned choices. Where is neither of them? Outside our reasoned choices. -Epictetus",
  "Let us also produce some blod act of our own & join the ranks of most emulated. - Seneca",
  "Kindness is invincible, but only when it's sincere with no hypocrisy or faking. - Marcus Aurelius",
  "How much credence we give to the opinions our peers have of us and how little to our very own. - Marcus Aurelius",
  "What is your vocation? To be a good person. - Marcus Aurelius",
  "Much more harmful are the consequences of anger and grief than the circumstances that aroused them in us! - Marcus Aurelius",
  "The reason why we have two ears and only one mouth is so we might listen more and talk less. - Diogenes Laertius",
  "The obstacle on the path becomes the way. - Marcus Aurelius",
  "In your actions, don't procrastinate. In your conversations, don't confuse. In your thoughts don't be passive or aggressive. - Marcus Aurelius",
  "Silence is the lesson learned from the many sufferings of life. - Seneca",
  "But there is no reason to live and no limit to our miseries if we let our fears predominate. - Seneca",
  "Whenever you suffer pain keep in mind that it's nothing to be ashamed of and that it can't degrade your intelligence nor keep it from acting rationally. - Marcus Aurelius",
  "Dig deep within yourself, for there is a foundation of goodness every ready to flow if you will keep digging. - Marcus Aurelius",
  "This universe is change. Life is opinion. - Marcus Aurelius",
  "The greater danger for most of us is not that our aim is high and we miss it, but it is low and we hit it. - Aristotle",
  "When you arise in the morning, think of what a precious privilege it is to be alive - to breathe, to think, to enjoy, to love. - Marcus Aurelius",
  "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth. - Marcus Aurelius",
  "Our life is what our thoughts make it. - Marcus Aurelius",
  "The best revenge is not to be like your enemy. - Marcus Aurelius",
  "Nonjudgement is the pathway to a quiet mind!",
  "Everything transitory—the knower and the known. - Marcus Aurelius",
  "Look into their minds, at what the wise do and what they don’t. - Marcus Aurelius",
  "Time is a river, a violent current of events, glimpsed once and already carried past us, and another follows and is gone. - Marcus Aurelius",
  "To be like the rock that the waves keep crashing over. It stands unmoved and the raging of the sea falls still around it. - Marcus Aurelius",
  "To shrug it all off and wipe it clean—every annoyance and distraction—and reach utter stillness. Child’s play. - Marcus Aurelius",
  "It is crazy to want what is impossible. And impossible for the wicked not to do so. - Marcus Aurelius"
]

let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
let engineeredQuote = randomQuote.replace("―", "-");
let quoteAttribution = engineeredQuote.lastIndexOf("-");
let author = "";
if (quoteAttribution !== -1){
  author = engineeredQuote.slice([quoteAttribution]);
  randomQuote = randomQuote.slice(0, quoteAttribution);
}

module.exports.randomQuote = randomQuote;
module.exports.author = author;
