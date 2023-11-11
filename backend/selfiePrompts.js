const getPrompt = (cloneName, customPrompt) => {
    return `actual 8K realistic portrait photo of ${cloneName} person ${customPrompt}, portrait, happy colors, bright eyes, clear eyes, warm smile, smooth soft skin, big dreamy eyes, symmetrical, anime wide eyes, soft lighting, detailed face, by makoto shinkai, stanley artgerm lau, wlop, rossdraws, concept art, digital painting, looking into camera`
}
const getNegativePrompt = () => "painting, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, deformed, ugly, blurry, bad anatomy, bad proportions, extra limbs, cloned face, skinny, glitchy, double torso, extra arms, extra hands, mangled fingers, missing lips, ugly face, distorted face, extra legs, anime"

module.exports = { getPrompt, getNegativePrompt };