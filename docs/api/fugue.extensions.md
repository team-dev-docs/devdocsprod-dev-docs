# fugue.extensions


* [fugue.extensions.creator](fugue.extensions.creator.md)


* [fugue.extensions.creator.convert](fugue.extensions.creator.md#module-fugue.extensions.creator.convert)


* [`creator()`](fugue.extensions.creator.md#fugue.extensions.creator.convert.creator)


* [`register_creator()`](fugue.extensions.creator.md#fugue.extensions.creator.convert.register_creator)


* [fugue.extensions.creator.creator](fugue.extensions.creator.md#module-fugue.extensions.creator.creator)


* [`Creator`](fugue.extensions.creator.md#fugue.extensions.creator.creator.Creator)


* [`Creator.create()`](fugue.extensions.creator.md#fugue.extensions.creator.creator.Creator.create)


* [fugue.extensions.outputter](fugue.extensions.outputter.md)


* [fugue.extensions.outputter.convert](fugue.extensions.outputter.md#module-fugue.extensions.outputter.convert)


* [`outputter()`](fugue.extensions.outputter.md#fugue.extensions.outputter.convert.outputter)


* [`register_outputter()`](fugue.extensions.outputter.md#fugue.extensions.outputter.convert.register_outputter)


* [fugue.extensions.outputter.outputter](fugue.extensions.outputter.md#module-fugue.extensions.outputter.outputter)


* [`Outputter`](fugue.extensions.outputter.md#fugue.extensions.outputter.outputter.Outputter)


* [`Outputter.process()`](fugue.extensions.outputter.md#fugue.extensions.outputter.outputter.Outputter.process)


* [fugue.extensions.processor](fugue.extensions.processor.md)


* [fugue.extensions.processor.convert](fugue.extensions.processor.md#module-fugue.extensions.processor.convert)


* [`processor()`](fugue.extensions.processor.md#fugue.extensions.processor.convert.processor)


* [`register_processor()`](fugue.extensions.processor.md#fugue.extensions.processor.convert.register_processor)


* [fugue.extensions.processor.processor](fugue.extensions.processor.md#module-fugue.extensions.processor.processor)


* [`Processor`](fugue.extensions.processor.md#fugue.extensions.processor.processor.Processor)


* [`Processor.process()`](fugue.extensions.processor.md#fugue.extensions.processor.processor.Processor.process)


* [fugue.extensions.transformer](fugue.extensions.transformer.md)


* [fugue.extensions.transformer.constants](fugue.extensions.transformer.md#module-fugue.extensions.transformer.constants)


* [fugue.extensions.transformer.convert](fugue.extensions.transformer.md#module-fugue.extensions.transformer.convert)


* [`cotransformer()`](fugue.extensions.transformer.md#fugue.extensions.transformer.convert.cotransformer)


* [`output_cotransformer()`](fugue.extensions.transformer.md#fugue.extensions.transformer.convert.output_cotransformer)


* [`output_transformer()`](fugue.extensions.transformer.md#fugue.extensions.transformer.convert.output_transformer)


* [`register_output_transformer()`](fugue.extensions.transformer.md#fugue.extensions.transformer.convert.register_output_transformer)


* [`register_transformer()`](fugue.extensions.transformer.md#fugue.extensions.transformer.convert.register_transformer)


* [`transformer()`](fugue.extensions.transformer.md#fugue.extensions.transformer.convert.transformer)


* [fugue.extensions.transformer.transformer](fugue.extensions.transformer.md#module-fugue.extensions.transformer.transformer)


* [`CoTransformer`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer)


* [`CoTransformer.get_output_schema()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer.get_output_schema)


* [`CoTransformer.on_init()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer.on_init)


* [`CoTransformer.transform()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer.transform)


* [`OutputCoTransformer`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer)


* [`OutputCoTransformer.get_output_schema()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer.get_output_schema)


* [`OutputCoTransformer.process()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer.process)


* [`OutputCoTransformer.transform()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer.transform)


* [`OutputTransformer`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer)


* [`OutputTransformer.get_output_schema()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer.get_output_schema)


* [`OutputTransformer.process()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer.process)


* [`OutputTransformer.transform()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer.transform)


* [`Transformer`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer)


* [`Transformer.get_output_schema()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer.get_output_schema)


* [`Transformer.on_init()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer.on_init)


* [`Transformer.transform()`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer.transform)


## fugue.extensions.context


### _class_ fugue.extensions.context.ExtensionContext()
Bases: `object`

Context variables that extensions can access. It's also the base
class of all extensions.


#### _property_ callback(_: [RPCClient](fugue.rpc.md#fugue.rpc.base.RPCClient_ )
RPC client to talk to driver, this is for transformers only,
and available on both driver and workers


#### _property_ cursor(_: [PartitionCursor](fugue.collections.md#fugue.collections.partition.PartitionCursor_ )
Cursor of the current logical partition, this is for transformers only,
and only available on worker side


#### _property_ execution_engine(_: [ExecutionEngine](fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine_ )
Execution engine for the current execution, this is only available on
driver side


#### _property_ has_callback(_: boo_ )
Whether this transformer has callback


#### _property_ key_schema(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )
Partition keys schema, this is for transformers only, and available on both
driver and workers


#### _property_ output_schema(_: [Schema](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.schema.Schema_ )
Output schema of the operation. This is accessible for all extensions (
if defined), and on both driver and workers


#### _property_ params(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
Parameters set for using this extension.

You will get `{"a": 1}` as params in the `dummy` transformer


#### _property_ partition_spec(_: [PartitionSpec](fugue.collections.md#fugue.collections.partition.PartitionSpec_ )
Partition specification, this is for all extensions except for creators,
and available on both driver and workers


#### _property_ rpc_server(_: [RPCServer](fugue.rpc.md#fugue.rpc.base.RPCServer_ )
RPC client to talk to driver, this is for transformers only,
and available on both driver and workers


#### validate_on_compile()

* **Return type**

None



#### validate_on_runtime(data)

* **Parameters**

**data** ([*DataFrame*](fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)* | *[*DataFrames*](fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)) -- 



* **Return type**

None



#### _property_ validation_rules(_: Dict[str, Any_ )
Extension input validation rules defined by user


#### _property_ workflow_conf(_: [ParamDict](https://triad.readthedocs.io/en/latest/api/triad.collections.html#triad.collections.dict.ParamDict_ )
Workflow level configs, this is accessible even in
[`Transformer`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer) and
[`CoTransformer`](fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer)

You will get `{"b": 10}` as workflow_conf in the `dummy` transformer
on both driver and workers.
