const DEFAULT_PROMPT = "a red bicycle leaning against a brick wall, morning light";
const DEFAULT_TIER = "fast";

function optionalInteger(value, name) {
  if (value === undefined || value === "") return undefined;
  if (!/^-?\d+$/.test(value)) throw new Error(`${name} must be an integer`);
  return Number(value);
}

export function buildImageRequest(env = process.env) {
  const prompt = env.IMAGE_PROMPT?.trim() || DEFAULT_PROMPT;
  const tier = env.IMAGE_TIER?.trim() || DEFAULT_TIER;
  const width = optionalInteger(env.IMAGE_WIDTH, "IMAGE_WIDTH");
  const height = optionalInteger(env.IMAGE_HEIGHT, "IMAGE_HEIGHT");
  const seed = optionalInteger(env.IMAGE_SEED, "IMAGE_SEED");
  const negativePrompt = env.IMAGE_NEGATIVE_PROMPT?.trim();

  return {
    prompt,
    tier,
    ...(width === undefined ? {} : { width }),
    ...(height === undefined ? {} : { height }),
    ...(seed === undefined ? {} : { seed }),
    ...(negativePrompt ? { negative_prompt: negativePrompt } : {}),
  };
}
