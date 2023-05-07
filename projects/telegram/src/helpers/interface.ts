function request<MYT>(data: MYT): { value: MYT } {
	return { value: data };
}

const result = request({ text: "hello world" });

/**
 * app(20) -> { value: 20 }
 * app({text: "hello world" }) -> { value: { text: "hello world" } }
 * app("macbook") -> { value : "macbook" }
 *
 */
