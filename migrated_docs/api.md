# API Reference


* [fugue](api/fugue.md)


    * [fugue.bag](api/fugue.bag.md)


        * [fugue.bag.array_bag](api/fugue.bag.md#module-fugue.bag.array_bag)


            * [`ArrayBag`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag)


                * [`ArrayBag.as_array()`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag.as_array)


                * [`ArrayBag.count()`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag.count)


                * [`ArrayBag.empty`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag.empty)


                * [`ArrayBag.head()`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag.head)


                * [`ArrayBag.native`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag.native)


                * [`ArrayBag.peek()`](api/fugue.bag.md#fugue.bag.array_bag.ArrayBag.peek)


        * [fugue.bag.bag](api/fugue.bag.md#module-fugue.bag.bag)


            * [`Bag`](api/fugue.bag.md#fugue.bag.bag.Bag)


                * [`Bag.as_array()`](api/fugue.bag.md#fugue.bag.bag.Bag.as_array)


                * [`Bag.as_local()`](api/fugue.bag.md#fugue.bag.bag.Bag.as_local)


                * [`Bag.head()`](api/fugue.bag.md#fugue.bag.bag.Bag.head)


                * [`Bag.peek()`](api/fugue.bag.md#fugue.bag.bag.Bag.peek)


            * [`BagDisplay`](api/fugue.bag.md#fugue.bag.bag.BagDisplay)


                * [`BagDisplay.bg`](api/fugue.bag.md#fugue.bag.bag.BagDisplay.bg)


                * [`BagDisplay.show()`](api/fugue.bag.md#fugue.bag.bag.BagDisplay.show)


            * [`LocalBag`](api/fugue.bag.md#fugue.bag.bag.LocalBag)


                * [`LocalBag.as_local()`](api/fugue.bag.md#fugue.bag.bag.LocalBag.as_local)


                * [`LocalBag.is_local`](api/fugue.bag.md#fugue.bag.bag.LocalBag.is_local)


                * [`LocalBag.num_partitions`](api/fugue.bag.md#fugue.bag.bag.LocalBag.num_partitions)


            * [`LocalBoundedBag`](api/fugue.bag.md#fugue.bag.bag.LocalBoundedBag)


                * [`LocalBoundedBag.is_bounded`](api/fugue.bag.md#fugue.bag.bag.LocalBoundedBag.is_bounded)


    * [fugue.collections](api/fugue.collections.md)


        * [fugue.collections.partition](api/fugue.collections.md#module-fugue.collections.partition)


            * [`BagPartitionCursor`](api/fugue.collections.md#fugue.collections.partition.BagPartitionCursor)


            * [`DatasetPartitionCursor`](api/fugue.collections.md#fugue.collections.partition.DatasetPartitionCursor)


                * [`DatasetPartitionCursor.item`](api/fugue.collections.md#fugue.collections.partition.DatasetPartitionCursor.item)


                * [`DatasetPartitionCursor.partition_no`](api/fugue.collections.md#fugue.collections.partition.DatasetPartitionCursor.partition_no)


                * [`DatasetPartitionCursor.physical_partition_no`](api/fugue.collections.md#fugue.collections.partition.DatasetPartitionCursor.physical_partition_no)


                * [`DatasetPartitionCursor.set()`](api/fugue.collections.md#fugue.collections.partition.DatasetPartitionCursor.set)


                * [`DatasetPartitionCursor.slice_no`](api/fugue.collections.md#fugue.collections.partition.DatasetPartitionCursor.slice_no)


            * [`PartitionCursor`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor)


                * [`PartitionCursor.key_schema`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor.key_schema)


                * [`PartitionCursor.key_value_array`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor.key_value_array)


                * [`PartitionCursor.key_value_dict`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor.key_value_dict)


                * [`PartitionCursor.row`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor.row)


                * [`PartitionCursor.row_schema`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor.row_schema)


                * [`PartitionCursor.set()`](api/fugue.collections.md#fugue.collections.partition.PartitionCursor.set)


            * [`PartitionSpec`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec)


                * [`PartitionSpec.algo`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.algo)


                * [`PartitionSpec.empty`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.empty)


                * [`PartitionSpec.get_cursor()`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.get_cursor)


                * [`PartitionSpec.get_key_schema()`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.get_key_schema)


                * [`PartitionSpec.get_num_partitions()`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.get_num_partitions)


                * [`PartitionSpec.get_partitioner()`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.get_partitioner)


                * [`PartitionSpec.get_sorts()`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.get_sorts)


                * [`PartitionSpec.jsondict`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.jsondict)


                * [`PartitionSpec.num_partitions`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.num_partitions)


                * [`PartitionSpec.partition_by`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.partition_by)


                * [`PartitionSpec.presort`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.presort)


                * [`PartitionSpec.presort_expr`](api/fugue.collections.md#fugue.collections.partition.PartitionSpec.presort_expr)


            * [`parse_presort_exp()`](api/fugue.collections.md#fugue.collections.partition.parse_presort_exp)


        * [fugue.collections.sql](api/fugue.collections.md#module-fugue.collections.sql)


            * [`StructuredRawSQL`](api/fugue.collections.md#fugue.collections.sql.StructuredRawSQL)


                * [`StructuredRawSQL.construct()`](api/fugue.collections.md#fugue.collections.sql.StructuredRawSQL.construct)


                * [`StructuredRawSQL.dialect`](api/fugue.collections.md#fugue.collections.sql.StructuredRawSQL.dialect)


                * [`StructuredRawSQL.from_expr()`](api/fugue.collections.md#fugue.collections.sql.StructuredRawSQL.from_expr)


            * [`TempTableName`](api/fugue.collections.md#fugue.collections.sql.TempTableName)


        * [fugue.collections.yielded](api/fugue.collections.md#module-fugue.collections.yielded)


            * [`PhysicalYielded`](api/fugue.collections.md#fugue.collections.yielded.PhysicalYielded)


                * [`PhysicalYielded.is_set`](api/fugue.collections.md#fugue.collections.yielded.PhysicalYielded.is_set)


                * [`PhysicalYielded.name`](api/fugue.collections.md#fugue.collections.yielded.PhysicalYielded.name)


                * [`PhysicalYielded.set_value()`](api/fugue.collections.md#fugue.collections.yielded.PhysicalYielded.set_value)


                * [`PhysicalYielded.storage_type`](api/fugue.collections.md#fugue.collections.yielded.PhysicalYielded.storage_type)


            * [`Yielded`](api/fugue.collections.md#fugue.collections.yielded.Yielded)


                * [`Yielded.is_set`](api/fugue.collections.md#fugue.collections.yielded.Yielded.is_set)


    * [fugue.column](api/fugue.column.md)


        * [fugue.column.expressions](api/fugue.column.md#module-fugue.column.expressions)


            * [`ColumnExpr`](api/fugue.column.md#fugue.column.expressions.ColumnExpr)


                * [`ColumnExpr.alias()`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.alias)


                * [`ColumnExpr.as_name`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.as_name)


                * [`ColumnExpr.as_type`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.as_type)


                * [`ColumnExpr.body_str`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.body_str)


                * [`ColumnExpr.cast()`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.cast)


                * [`ColumnExpr.infer_alias()`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.infer_alias)


                * [`ColumnExpr.infer_type()`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.infer_type)


                * [`ColumnExpr.is_null()`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.is_null)


                * [`ColumnExpr.name`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.name)


                * [`ColumnExpr.not_null()`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.not_null)


                * [`ColumnExpr.output_name`](api/fugue.column.md#fugue.column.expressions.ColumnExpr.output_name)


            * [`all_cols()`](api/fugue.column.md#fugue.column.expressions.all_cols)


            * [`col()`](api/fugue.column.md#fugue.column.expressions.col)


            * [`function()`](api/fugue.column.md#fugue.column.expressions.function)


            * [`lit()`](api/fugue.column.md#fugue.column.expressions.lit)


            * [`null()`](api/fugue.column.md#fugue.column.expressions.null)


        * [fugue.column.functions](api/fugue.column.md#module-fugue.column.functions)


            * [`avg()`](api/fugue.column.md#fugue.column.functions.avg)


            * [`coalesce()`](api/fugue.column.md#fugue.column.functions.coalesce)


            * [`count()`](api/fugue.column.md#fugue.column.functions.count)


            * [`count_distinct()`](api/fugue.column.md#fugue.column.functions.count_distinct)


            * [`first()`](api/fugue.column.md#fugue.column.functions.first)


            * [`is_agg()`](api/fugue.column.md#fugue.column.functions.is_agg)


            * [`last()`](api/fugue.column.md#fugue.column.functions.last)


            * [`max()`](api/fugue.column.md#fugue.column.functions.max)


            * [`min()`](api/fugue.column.md#fugue.column.functions.min)


            * [`sum()`](api/fugue.column.md#fugue.column.functions.sum)


        * [fugue.column.sql](api/fugue.column.md#module-fugue.column.sql)


            * [`SQLExpressionGenerator`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator)


                * [`SQLExpressionGenerator.add_func_handler()`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator.add_func_handler)


                * [`SQLExpressionGenerator.correct_select_schema()`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator.correct_select_schema)


                * [`SQLExpressionGenerator.generate()`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator.generate)


                * [`SQLExpressionGenerator.select()`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator.select)


                * [`SQLExpressionGenerator.type_to_expr()`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator.type_to_expr)


                * [`SQLExpressionGenerator.where()`](api/fugue.column.md#fugue.column.sql.SQLExpressionGenerator.where)


            * [`SelectColumns`](api/fugue.column.md#fugue.column.sql.SelectColumns)


                * [`SelectColumns.agg_funcs`](api/fugue.column.md#fugue.column.sql.SelectColumns.agg_funcs)


                * [`SelectColumns.all_cols`](api/fugue.column.md#fugue.column.sql.SelectColumns.all_cols)


                * [`SelectColumns.assert_all_with_names()`](api/fugue.column.md#fugue.column.sql.SelectColumns.assert_all_with_names)


                * [`SelectColumns.assert_no_agg()`](api/fugue.column.md#fugue.column.sql.SelectColumns.assert_no_agg)


                * [`SelectColumns.assert_no_wildcard()`](api/fugue.column.md#fugue.column.sql.SelectColumns.assert_no_wildcard)


                * [`SelectColumns.group_keys`](api/fugue.column.md#fugue.column.sql.SelectColumns.group_keys)


                * [`SelectColumns.has_agg`](api/fugue.column.md#fugue.column.sql.SelectColumns.has_agg)


                * [`SelectColumns.has_literals`](api/fugue.column.md#fugue.column.sql.SelectColumns.has_literals)


                * [`SelectColumns.is_distinct`](api/fugue.column.md#fugue.column.sql.SelectColumns.is_distinct)


                * [`SelectColumns.literals`](api/fugue.column.md#fugue.column.sql.SelectColumns.literals)


                * [`SelectColumns.non_agg_funcs`](api/fugue.column.md#fugue.column.sql.SelectColumns.non_agg_funcs)


                * [`SelectColumns.replace_wildcard()`](api/fugue.column.md#fugue.column.sql.SelectColumns.replace_wildcard)


                * [`SelectColumns.simple`](api/fugue.column.md#fugue.column.sql.SelectColumns.simple)


                * [`SelectColumns.simple_cols`](api/fugue.column.md#fugue.column.sql.SelectColumns.simple_cols)


    * [fugue.dataframe](api/fugue.dataframe.md)


        * [fugue.dataframe.api](api/fugue.dataframe.md#module-fugue.dataframe.api)


            * [`get_native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.api.get_native_as_df)


            * [`normalize_column_names()`](api/fugue.dataframe.md#fugue.dataframe.api.normalize_column_names)


        * [fugue.dataframe.array_dataframe](api/fugue.dataframe.md#module-fugue.dataframe.array_dataframe)


            * [`ArrayDataFrame`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame)


                * [`ArrayDataFrame.alter_columns()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.alter_columns)


                * [`ArrayDataFrame.as_array()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.as_array)


                * [`ArrayDataFrame.as_array_iterable()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.as_array_iterable)


                * [`ArrayDataFrame.count()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.count)


                * [`ArrayDataFrame.empty`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.empty)


                * [`ArrayDataFrame.head()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.head)


                * [`ArrayDataFrame.native`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.native)


                * [`ArrayDataFrame.peek_array()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.peek_array)


                * [`ArrayDataFrame.rename()`](api/fugue.dataframe.md#fugue.dataframe.array_dataframe.ArrayDataFrame.rename)


        * [fugue.dataframe.arrow_dataframe](api/fugue.dataframe.md#module-fugue.dataframe.arrow_dataframe)


            * [`ArrowDataFrame`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame)


                * [`ArrowDataFrame.alter_columns()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.alter_columns)


                * [`ArrowDataFrame.as_array()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.as_array)


                * [`ArrowDataFrame.as_array_iterable()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.as_array_iterable)


                * [`ArrowDataFrame.as_arrow()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.as_arrow)


                * [`ArrowDataFrame.as_pandas()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.as_pandas)


                * [`ArrowDataFrame.count()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.count)


                * [`ArrowDataFrame.empty`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.empty)


                * [`ArrowDataFrame.head()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.head)


                * [`ArrowDataFrame.native`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.native)


                * [`ArrowDataFrame.native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.native_as_df)


                * [`ArrowDataFrame.peek_array()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.peek_array)


                * [`ArrowDataFrame.peek_dict()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.peek_dict)


                * [`ArrowDataFrame.rename()`](api/fugue.dataframe.md#fugue.dataframe.arrow_dataframe.ArrowDataFrame.rename)


        * [fugue.dataframe.dataframe](api/fugue.dataframe.md#module-fugue.dataframe.dataframe)


            * [`DataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame)


                * [`DataFrame.alter_columns()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.alter_columns)


                * [`DataFrame.as_array()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.as_array)


                * [`DataFrame.as_array_iterable()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.as_array_iterable)


                * [`DataFrame.as_arrow()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.as_arrow)


                * [`DataFrame.as_dict_iterable()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.as_dict_iterable)


                * [`DataFrame.as_local()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.as_local)


                * [`DataFrame.as_pandas()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.as_pandas)


                * [`DataFrame.columns`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.columns)


                * [`DataFrame.drop()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.drop)


                * [`DataFrame.get_info_str()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.get_info_str)


                * [`DataFrame.head()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.head)


                * [`DataFrame.native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.native_as_df)


                * [`DataFrame.peek_array()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.peek_array)


                * [`DataFrame.peek_dict()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.peek_dict)


                * [`DataFrame.rename()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.rename)


                * [`DataFrame.schema`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.schema)


                * [`DataFrame.schema_discovered`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrame.schema_discovered)


            * [`DataFrameDisplay`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrameDisplay)


                * [`DataFrameDisplay.df`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrameDisplay.df)


                * [`DataFrameDisplay.show()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.DataFrameDisplay.show)


            * [`LocalBoundedDataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame)


                * [`LocalBoundedDataFrame.is_bounded`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalBoundedDataFrame.is_bounded)


            * [`LocalDataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame)


                * [`LocalDataFrame.as_local()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame.as_local)


                * [`LocalDataFrame.is_local`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame.is_local)


                * [`LocalDataFrame.native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame.native_as_df)


                * [`LocalDataFrame.num_partitions`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalDataFrame.num_partitions)


            * [`LocalUnboundedDataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalUnboundedDataFrame)


                * [`LocalUnboundedDataFrame.count()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalUnboundedDataFrame.count)


                * [`LocalUnboundedDataFrame.is_bounded`](api/fugue.dataframe.md#fugue.dataframe.dataframe.LocalUnboundedDataFrame.is_bounded)


            * [`YieldedDataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe.YieldedDataFrame)


                * [`YieldedDataFrame.is_set`](api/fugue.dataframe.md#fugue.dataframe.dataframe.YieldedDataFrame.is_set)


                * [`YieldedDataFrame.result`](api/fugue.dataframe.md#fugue.dataframe.dataframe.YieldedDataFrame.result)


                * [`YieldedDataFrame.set_value()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.YieldedDataFrame.set_value)


            * [`as_fugue_df()`](api/fugue.dataframe.md#fugue.dataframe.dataframe.as_fugue_df)


        * [fugue.dataframe.dataframe_iterable_dataframe](api/fugue.dataframe.md#module-fugue.dataframe.dataframe_iterable_dataframe)


            * [`LocalDataFrameIterableDataFrame`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame)


                * [`LocalDataFrameIterableDataFrame.alter_columns()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.alter_columns)


                * [`LocalDataFrameIterableDataFrame.as_array()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.as_array)


                * [`LocalDataFrameIterableDataFrame.as_array_iterable()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.as_array_iterable)


                * [`LocalDataFrameIterableDataFrame.as_arrow()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.as_arrow)


                * [`LocalDataFrameIterableDataFrame.as_pandas()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.as_pandas)


                * [`LocalDataFrameIterableDataFrame.empty`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.empty)


                * [`LocalDataFrameIterableDataFrame.head()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.head)


                * [`LocalDataFrameIterableDataFrame.native`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.native)


                * [`LocalDataFrameIterableDataFrame.peek_array()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.peek_array)


                * [`LocalDataFrameIterableDataFrame.rename()`](api/fugue.dataframe.md#fugue.dataframe.dataframe_iterable_dataframe.LocalDataFrameIterableDataFrame.rename)


        * [fugue.dataframe.dataframes](api/fugue.dataframe.md#module-fugue.dataframe.dataframes)


            * [`DataFrames`](api/fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames)


                * [`DataFrames.convert()`](api/fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames.convert)


                * [`DataFrames.has_key`](api/fugue.dataframe.md#fugue.dataframe.dataframes.DataFrames.has_key)


        * [fugue.dataframe.iterable_dataframe](api/fugue.dataframe.md#module-fugue.dataframe.iterable_dataframe)


            * [`IterableDataFrame`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame)


                * [`IterableDataFrame.alter_columns()`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.alter_columns)


                * [`IterableDataFrame.as_array()`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.as_array)


                * [`IterableDataFrame.as_array_iterable()`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.as_array_iterable)


                * [`IterableDataFrame.empty`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.empty)


                * [`IterableDataFrame.head()`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.head)


                * [`IterableDataFrame.native`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.native)


                * [`IterableDataFrame.peek_array()`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.peek_array)


                * [`IterableDataFrame.rename()`](api/fugue.dataframe.md#fugue.dataframe.iterable_dataframe.IterableDataFrame.rename)


        * [fugue.dataframe.pandas_dataframe](api/fugue.dataframe.md#module-fugue.dataframe.pandas_dataframe)


            * [`PandasDataFrame`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame)


                * [`PandasDataFrame.alter_columns()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.alter_columns)


                * [`PandasDataFrame.as_array()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.as_array)


                * [`PandasDataFrame.as_array_iterable()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.as_array_iterable)


                * [`PandasDataFrame.as_pandas()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.as_pandas)


                * [`PandasDataFrame.count()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.count)


                * [`PandasDataFrame.empty`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.empty)


                * [`PandasDataFrame.head()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.head)


                * [`PandasDataFrame.native`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.native)


                * [`PandasDataFrame.native_as_df()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.native_as_df)


                * [`PandasDataFrame.peek_array()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.peek_array)


                * [`PandasDataFrame.rename()`](api/fugue.dataframe.md#fugue.dataframe.pandas_dataframe.PandasDataFrame.rename)


        * [fugue.dataframe.utils](api/fugue.dataframe.md#module-fugue.dataframe.utils)


            * [`deserialize_df()`](api/fugue.dataframe.md#fugue.dataframe.utils.deserialize_df)


            * [`get_join_schemas()`](api/fugue.dataframe.md#fugue.dataframe.utils.get_join_schemas)


            * [`pickle_df()`](api/fugue.dataframe.md#fugue.dataframe.utils.pickle_df)


            * [`serialize_df()`](api/fugue.dataframe.md#fugue.dataframe.utils.serialize_df)


            * [`to_local_bounded_df()`](api/fugue.dataframe.md#fugue.dataframe.utils.to_local_bounded_df)


            * [`to_local_df()`](api/fugue.dataframe.md#fugue.dataframe.utils.to_local_df)


            * [`unpickle_df()`](api/fugue.dataframe.md#fugue.dataframe.utils.unpickle_df)


    * [fugue.dataset](api/fugue.dataset.md)


        * [fugue.dataset.api](api/fugue.dataset.md#module-fugue.dataset.api)


            * [`show()`](api/fugue.dataset.md#fugue.dataset.api.show)


        * [fugue.dataset.dataset](api/fugue.dataset.md#module-fugue.dataset.dataset)


            * [`Dataset`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset)


                * [`Dataset.assert_not_empty()`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.assert_not_empty)


                * [`Dataset.count()`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.count)


                * [`Dataset.empty`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.empty)


                * [`Dataset.has_metadata`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.has_metadata)


                * [`Dataset.is_bounded`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.is_bounded)


                * [`Dataset.is_local`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.is_local)


                * [`Dataset.metadata`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.metadata)


                * [`Dataset.native`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.native)


                * [`Dataset.num_partitions`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.num_partitions)


                * [`Dataset.reset_metadata()`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.reset_metadata)


                * [`Dataset.show()`](api/fugue.dataset.md#fugue.dataset.dataset.Dataset.show)


            * [`DatasetDisplay`](api/fugue.dataset.md#fugue.dataset.dataset.DatasetDisplay)


                * [`DatasetDisplay.repr()`](api/fugue.dataset.md#fugue.dataset.dataset.DatasetDisplay.repr)


                * [`DatasetDisplay.repr_html()`](api/fugue.dataset.md#fugue.dataset.dataset.DatasetDisplay.repr_html)


                * [`DatasetDisplay.show()`](api/fugue.dataset.md#fugue.dataset.dataset.DatasetDisplay.show)


    * [fugue.execution](api/fugue.execution.md)


        * [fugue.execution.api](api/fugue.execution.md#module-fugue.execution.api)


            * [`aggregate()`](api/fugue.execution.md#fugue.execution.api.aggregate)


            * [`anti_join()`](api/fugue.execution.md#fugue.execution.api.anti_join)


            * [`assign()`](api/fugue.execution.md#fugue.execution.api.assign)


            * [`broadcast()`](api/fugue.execution.md#fugue.execution.api.broadcast)


            * [`clear_global_engine()`](api/fugue.execution.md#fugue.execution.api.clear_global_engine)


            * [`cross_join()`](api/fugue.execution.md#fugue.execution.api.cross_join)


            * [`distinct()`](api/fugue.execution.md#fugue.execution.api.distinct)


            * [`dropna()`](api/fugue.execution.md#fugue.execution.api.dropna)


            * [`engine_context()`](api/fugue.execution.md#fugue.execution.api.engine_context)


            * [`fillna()`](api/fugue.execution.md#fugue.execution.api.fillna)


            * [`filter()`](api/fugue.execution.md#fugue.execution.api.filter)


            * [`full_outer_join()`](api/fugue.execution.md#fugue.execution.api.full_outer_join)


            * [`get_context_engine()`](api/fugue.execution.md#fugue.execution.api.get_context_engine)


            * [`get_current_conf()`](api/fugue.execution.md#fugue.execution.api.get_current_conf)


            * [`get_current_parallelism()`](api/fugue.execution.md#fugue.execution.api.get_current_parallelism)


            * [`inner_join()`](api/fugue.execution.md#fugue.execution.api.inner_join)


            * [`intersect()`](api/fugue.execution.md#fugue.execution.api.intersect)


            * [`join()`](api/fugue.execution.md#fugue.execution.api.join)


            * [`left_outer_join()`](api/fugue.execution.md#fugue.execution.api.left_outer_join)


            * [`load()`](api/fugue.execution.md#fugue.execution.api.load)


            * [`persist()`](api/fugue.execution.md#fugue.execution.api.persist)


            * [`repartition()`](api/fugue.execution.md#fugue.execution.api.repartition)


            * [`right_outer_join()`](api/fugue.execution.md#fugue.execution.api.right_outer_join)


            * [`run_engine_function()`](api/fugue.execution.md#fugue.execution.api.run_engine_function)


            * [`sample()`](api/fugue.execution.md#fugue.execution.api.sample)


            * [`save()`](api/fugue.execution.md#fugue.execution.api.save)


            * [`select()`](api/fugue.execution.md#fugue.execution.api.select)


            * [`semi_join()`](api/fugue.execution.md#fugue.execution.api.semi_join)


            * [`set_global_engine()`](api/fugue.execution.md#fugue.execution.api.set_global_engine)


            * [`subtract()`](api/fugue.execution.md#fugue.execution.api.subtract)


            * [`take()`](api/fugue.execution.md#fugue.execution.api.take)


            * [`union()`](api/fugue.execution.md#fugue.execution.api.union)


        * [fugue.execution.execution_engine](api/fugue.execution.md#module-fugue.execution.execution_engine)


            * [`EngineFacet`](api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet)


                * [`EngineFacet.conf`](api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet.conf)


                * [`EngineFacet.execution_engine`](api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet.execution_engine)


                * [`EngineFacet.execution_engine_constraint`](api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet.execution_engine_constraint)


                * [`EngineFacet.log`](api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet.log)


                * [`EngineFacet.to_df()`](api/fugue.execution.md#fugue.execution.execution_engine.EngineFacet.to_df)


            * [`ExecutionEngine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine)


                * [`ExecutionEngine.aggregate()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.aggregate)


                * [`ExecutionEngine.as_context()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.as_context)


                * [`ExecutionEngine.assign()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.assign)


                * [`ExecutionEngine.broadcast()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.broadcast)


                * [`ExecutionEngine.comap()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.comap)


                * [`ExecutionEngine.conf`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.conf)


                * [`ExecutionEngine.convert_yield_dataframe()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.convert_yield_dataframe)


                * [`ExecutionEngine.create_default_map_engine()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.create_default_map_engine)


                * [`ExecutionEngine.create_default_sql_engine()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.create_default_sql_engine)


                * [`ExecutionEngine.distinct()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.distinct)


                * [`ExecutionEngine.dropna()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.dropna)


                * [`ExecutionEngine.fillna()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.fillna)


                * [`ExecutionEngine.filter()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.filter)


                * [`ExecutionEngine.fs`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.fs)


                * [`ExecutionEngine.get_current_parallelism()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.get_current_parallelism)


                * [`ExecutionEngine.in_context`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.in_context)


                * [`ExecutionEngine.intersect()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.intersect)


                * [`ExecutionEngine.is_global`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.is_global)


                * [`ExecutionEngine.join()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.join)


                * [`ExecutionEngine.load_df()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.load_df)


                * [`ExecutionEngine.load_yielded()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.load_yielded)


                * [`ExecutionEngine.map_engine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.map_engine)


                * [`ExecutionEngine.on_enter_context()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.on_enter_context)


                * [`ExecutionEngine.on_exit_context()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.on_exit_context)


                * [`ExecutionEngine.persist()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.persist)


                * [`ExecutionEngine.repartition()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.repartition)


                * [`ExecutionEngine.sample()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.sample)


                * [`ExecutionEngine.save_df()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.save_df)


                * [`ExecutionEngine.select()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.select)


                * [`ExecutionEngine.set_global()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.set_global)


                * [`ExecutionEngine.set_sql_engine()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.set_sql_engine)


                * [`ExecutionEngine.sql_engine`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.sql_engine)


                * [`ExecutionEngine.stop()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.stop)


                * [`ExecutionEngine.stop_engine()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.stop_engine)


                * [`ExecutionEngine.subtract()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.subtract)


                * [`ExecutionEngine.take()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.take)


                * [`ExecutionEngine.union()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.union)


                * [`ExecutionEngine.zip()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.zip)


                * [`ExecutionEngine.zip_all()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngine.zip_all)


            * [`ExecutionEngineParam`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngineParam)


                * [`ExecutionEngineParam.to_input()`](api/fugue.execution.md#fugue.execution.execution_engine.ExecutionEngineParam.to_input)


            * [`FugueEngineBase`](api/fugue.execution.md#fugue.execution.execution_engine.FugueEngineBase)


                * [`FugueEngineBase.conf`](api/fugue.execution.md#fugue.execution.execution_engine.FugueEngineBase.conf)


                * [`FugueEngineBase.is_distributed`](api/fugue.execution.md#fugue.execution.execution_engine.FugueEngineBase.is_distributed)


                * [`FugueEngineBase.log`](api/fugue.execution.md#fugue.execution.execution_engine.FugueEngineBase.log)


                * [`FugueEngineBase.to_df()`](api/fugue.execution.md#fugue.execution.execution_engine.FugueEngineBase.to_df)


            * [`MapEngine`](api/fugue.execution.md#fugue.execution.execution_engine.MapEngine)


                * [`MapEngine.map_bag()`](api/fugue.execution.md#fugue.execution.execution_engine.MapEngine.map_bag)


                * [`MapEngine.map_dataframe()`](api/fugue.execution.md#fugue.execution.execution_engine.MapEngine.map_dataframe)


            * [`SQLEngine`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine)


                * [`SQLEngine.dialect`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.dialect)


                * [`SQLEngine.encode()`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.encode)


                * [`SQLEngine.encode_name()`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.encode_name)


                * [`SQLEngine.load_table()`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.load_table)


                * [`SQLEngine.save_table()`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.save_table)


                * [`SQLEngine.select()`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.select)


                * [`SQLEngine.table_exists()`](api/fugue.execution.md#fugue.execution.execution_engine.SQLEngine.table_exists)


        * [fugue.execution.factory](api/fugue.execution.md#module-fugue.execution.factory)


            * [`is_pandas_or()`](api/fugue.execution.md#fugue.execution.factory.is_pandas_or)


            * [`make_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.make_execution_engine)


            * [`make_sql_engine()`](api/fugue.execution.md#fugue.execution.factory.make_sql_engine)


            * [`register_default_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.register_default_execution_engine)


            * [`register_default_sql_engine()`](api/fugue.execution.md#fugue.execution.factory.register_default_sql_engine)


            * [`register_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.register_execution_engine)


            * [`register_sql_engine()`](api/fugue.execution.md#fugue.execution.factory.register_sql_engine)


            * [`try_get_context_execution_engine()`](api/fugue.execution.md#fugue.execution.factory.try_get_context_execution_engine)


        * [fugue.execution.native_execution_engine](api/fugue.execution.md#module-fugue.execution.native_execution_engine)


            * [`NativeExecutionEngine`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine)


                * [`NativeExecutionEngine.broadcast()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.broadcast)


                * [`NativeExecutionEngine.create_default_map_engine()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.create_default_map_engine)


                * [`NativeExecutionEngine.create_default_sql_engine()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.create_default_sql_engine)


                * [`NativeExecutionEngine.distinct()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.distinct)


                * [`NativeExecutionEngine.dropna()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.dropna)


                * [`NativeExecutionEngine.fillna()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.fillna)


                * [`NativeExecutionEngine.fs`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.fs)


                * [`NativeExecutionEngine.get_current_parallelism()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.get_current_parallelism)


                * [`NativeExecutionEngine.intersect()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.intersect)


                * [`NativeExecutionEngine.is_distributed`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.is_distributed)


                * [`NativeExecutionEngine.join()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.join)


                * [`NativeExecutionEngine.load_df()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.load_df)


                * [`NativeExecutionEngine.log`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.log)


                * [`NativeExecutionEngine.persist()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.persist)


                * [`NativeExecutionEngine.pl_utils`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.pl_utils)


                * [`NativeExecutionEngine.repartition()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.repartition)


                * [`NativeExecutionEngine.sample()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.sample)


                * [`NativeExecutionEngine.save_df()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.save_df)


                * [`NativeExecutionEngine.subtract()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.subtract)


                * [`NativeExecutionEngine.take()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.take)


                * [`NativeExecutionEngine.to_df()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.to_df)


                * [`NativeExecutionEngine.union()`](api/fugue.execution.md#fugue.execution.native_execution_engine.NativeExecutionEngine.union)


            * [`PandasMapEngine`](api/fugue.execution.md#fugue.execution.native_execution_engine.PandasMapEngine)


                * [`PandasMapEngine.execution_engine_constraint`](api/fugue.execution.md#fugue.execution.native_execution_engine.PandasMapEngine.execution_engine_constraint)


                * [`PandasMapEngine.is_distributed`](api/fugue.execution.md#fugue.execution.native_execution_engine.PandasMapEngine.is_distributed)


                * [`PandasMapEngine.map_dataframe()`](api/fugue.execution.md#fugue.execution.native_execution_engine.PandasMapEngine.map_dataframe)


                * [`PandasMapEngine.to_df()`](api/fugue.execution.md#fugue.execution.native_execution_engine.PandasMapEngine.to_df)


            * [`QPDPandasEngine`](api/fugue.execution.md#fugue.execution.native_execution_engine.QPDPandasEngine)


                * [`QPDPandasEngine.dialect`](api/fugue.execution.md#fugue.execution.native_execution_engine.QPDPandasEngine.dialect)


                * [`QPDPandasEngine.is_distributed`](api/fugue.execution.md#fugue.execution.native_execution_engine.QPDPandasEngine.is_distributed)


                * [`QPDPandasEngine.select()`](api/fugue.execution.md#fugue.execution.native_execution_engine.QPDPandasEngine.select)


                * [`QPDPandasEngine.to_df()`](api/fugue.execution.md#fugue.execution.native_execution_engine.QPDPandasEngine.to_df)


            * [`SqliteEngine`](api/fugue.execution.md#fugue.execution.native_execution_engine.SqliteEngine)


                * [`SqliteEngine.dialect`](api/fugue.execution.md#fugue.execution.native_execution_engine.SqliteEngine.dialect)


                * [`SqliteEngine.is_distributed`](api/fugue.execution.md#fugue.execution.native_execution_engine.SqliteEngine.is_distributed)


                * [`SqliteEngine.select()`](api/fugue.execution.md#fugue.execution.native_execution_engine.SqliteEngine.select)


    * [fugue.extensions](api/fugue.extensions.md)


        * [fugue.extensions.creator](api/fugue.extensions.creator.md)


            * [fugue.extensions.creator.convert](api/fugue.extensions.creator.md#module-fugue.extensions.creator.convert)


                * [`creator()`](api/fugue.extensions.creator.md#fugue.extensions.creator.convert.creator)


                * [`register_creator()`](api/fugue.extensions.creator.md#fugue.extensions.creator.convert.register_creator)


            * [fugue.extensions.creator.creator](api/fugue.extensions.creator.md#module-fugue.extensions.creator.creator)


                * [`Creator`](api/fugue.extensions.creator.md#fugue.extensions.creator.creator.Creator)


                    * [`Creator.create()`](api/fugue.extensions.creator.md#fugue.extensions.creator.creator.Creator.create)


        * [fugue.extensions.outputter](api/fugue.extensions.outputter.md)


            * [fugue.extensions.outputter.convert](api/fugue.extensions.outputter.md#module-fugue.extensions.outputter.convert)


                * [`outputter()`](api/fugue.extensions.outputter.md#fugue.extensions.outputter.convert.outputter)


                * [`register_outputter()`](api/fugue.extensions.outputter.md#fugue.extensions.outputter.convert.register_outputter)


            * [fugue.extensions.outputter.outputter](api/fugue.extensions.outputter.md#module-fugue.extensions.outputter.outputter)


                * [`Outputter`](api/fugue.extensions.outputter.md#fugue.extensions.outputter.outputter.Outputter)


                    * [`Outputter.process()`](api/fugue.extensions.outputter.md#fugue.extensions.outputter.outputter.Outputter.process)


        * [fugue.extensions.processor](api/fugue.extensions.processor.md)


            * [fugue.extensions.processor.convert](api/fugue.extensions.processor.md#module-fugue.extensions.processor.convert)


                * [`processor()`](api/fugue.extensions.processor.md#fugue.extensions.processor.convert.processor)


                * [`register_processor()`](api/fugue.extensions.processor.md#fugue.extensions.processor.convert.register_processor)


            * [fugue.extensions.processor.processor](api/fugue.extensions.processor.md#module-fugue.extensions.processor.processor)


                * [`Processor`](api/fugue.extensions.processor.md#fugue.extensions.processor.processor.Processor)


                    * [`Processor.process()`](api/fugue.extensions.processor.md#fugue.extensions.processor.processor.Processor.process)


        * [fugue.extensions.transformer](api/fugue.extensions.transformer.md)


            * [fugue.extensions.transformer.constants](api/fugue.extensions.transformer.md#module-fugue.extensions.transformer.constants)


            * [fugue.extensions.transformer.convert](api/fugue.extensions.transformer.md#module-fugue.extensions.transformer.convert)


                * [`cotransformer()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.convert.cotransformer)


                * [`output_cotransformer()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.convert.output_cotransformer)


                * [`output_transformer()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.convert.output_transformer)


                * [`register_output_transformer()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.convert.register_output_transformer)


                * [`register_transformer()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.convert.register_transformer)


                * [`transformer()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.convert.transformer)


            * [fugue.extensions.transformer.transformer](api/fugue.extensions.transformer.md#module-fugue.extensions.transformer.transformer)


                * [`CoTransformer`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer)


                    * [`CoTransformer.get_output_schema()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer.get_output_schema)


                    * [`CoTransformer.on_init()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer.on_init)


                    * [`CoTransformer.transform()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.CoTransformer.transform)


                * [`OutputCoTransformer`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer)


                    * [`OutputCoTransformer.get_output_schema()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer.get_output_schema)


                    * [`OutputCoTransformer.process()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer.process)


                    * [`OutputCoTransformer.transform()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputCoTransformer.transform)


                * [`OutputTransformer`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer)


                    * [`OutputTransformer.get_output_schema()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer.get_output_schema)


                    * [`OutputTransformer.process()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer.process)


                    * [`OutputTransformer.transform()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.OutputTransformer.transform)


                * [`Transformer`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer)


                    * [`Transformer.get_output_schema()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer.get_output_schema)


                    * [`Transformer.on_init()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer.on_init)


                    * [`Transformer.transform()`](api/fugue.extensions.transformer.md#fugue.extensions.transformer.transformer.Transformer.transform)


        * [fugue.extensions.context](api/fugue.extensions.md#module-fugue.extensions.context)


            * [`ExtensionContext`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext)


                * [`ExtensionContext.callback`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.callback)


                * [`ExtensionContext.cursor`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.cursor)


                * [`ExtensionContext.execution_engine`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.execution_engine)


                * [`ExtensionContext.has_callback`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.has_callback)


                * [`ExtensionContext.key_schema`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.key_schema)


                * [`ExtensionContext.output_schema`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.output_schema)


                * [`ExtensionContext.params`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.params)


                * [`ExtensionContext.partition_spec`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.partition_spec)


                * [`ExtensionContext.rpc_server`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.rpc_server)


                * [`ExtensionContext.validate_on_compile()`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.validate_on_compile)


                * [`ExtensionContext.validate_on_runtime()`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.validate_on_runtime)


                * [`ExtensionContext.validation_rules`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.validation_rules)


                * [`ExtensionContext.workflow_conf`](api/fugue.extensions.md#fugue.extensions.context.ExtensionContext.workflow_conf)


    * [fugue.rpc](api/fugue.rpc.md)


        * [fugue.rpc.base](api/fugue.rpc.md#module-fugue.rpc.base)


            * [`EmptyRPCHandler`](api/fugue.rpc.md#fugue.rpc.base.EmptyRPCHandler)


            * [`NativeRPCClient`](api/fugue.rpc.md#fugue.rpc.base.NativeRPCClient)


            * [`NativeRPCServer`](api/fugue.rpc.md#fugue.rpc.base.NativeRPCServer)


                * [`NativeRPCServer.make_client()`](api/fugue.rpc.md#fugue.rpc.base.NativeRPCServer.make_client)


                * [`NativeRPCServer.start_server()`](api/fugue.rpc.md#fugue.rpc.base.NativeRPCServer.start_server)


                * [`NativeRPCServer.stop_server()`](api/fugue.rpc.md#fugue.rpc.base.NativeRPCServer.stop_server)


            * [`RPCClient`](api/fugue.rpc.md#fugue.rpc.base.RPCClient)


            * [`RPCFunc`](api/fugue.rpc.md#fugue.rpc.base.RPCFunc)


            * [`RPCHandler`](api/fugue.rpc.md#fugue.rpc.base.RPCHandler)


                * [`RPCHandler.running`](api/fugue.rpc.md#fugue.rpc.base.RPCHandler.running)


                * [`RPCHandler.start()`](api/fugue.rpc.md#fugue.rpc.base.RPCHandler.start)


                * [`RPCHandler.start_handler()`](api/fugue.rpc.md#fugue.rpc.base.RPCHandler.start_handler)


                * [`RPCHandler.stop()`](api/fugue.rpc.md#fugue.rpc.base.RPCHandler.stop)


                * [`RPCHandler.stop_handler()`](api/fugue.rpc.md#fugue.rpc.base.RPCHandler.stop_handler)


            * [`RPCServer`](api/fugue.rpc.md#fugue.rpc.base.RPCServer)


                * [`RPCServer.conf`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.conf)


                * [`RPCServer.invoke()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.invoke)


                * [`RPCServer.make_client()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.make_client)


                * [`RPCServer.register()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.register)


                * [`RPCServer.start_handler()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.start_handler)


                * [`RPCServer.start_server()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.start_server)


                * [`RPCServer.stop_handler()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.stop_handler)


                * [`RPCServer.stop_server()`](api/fugue.rpc.md#fugue.rpc.base.RPCServer.stop_server)


            * [`make_rpc_server()`](api/fugue.rpc.md#fugue.rpc.base.make_rpc_server)


            * [`to_rpc_handler()`](api/fugue.rpc.md#fugue.rpc.base.to_rpc_handler)


        * [fugue.rpc.flask](api/fugue.rpc.md#module-fugue.rpc.flask)


            * [`FlaskRPCClient`](api/fugue.rpc.md#fugue.rpc.flask.FlaskRPCClient)


            * [`FlaskRPCServer`](api/fugue.rpc.md#fugue.rpc.flask.FlaskRPCServer)


                * [`FlaskRPCServer.make_client()`](api/fugue.rpc.md#fugue.rpc.flask.FlaskRPCServer.make_client)


                * [`FlaskRPCServer.start_server()`](api/fugue.rpc.md#fugue.rpc.flask.FlaskRPCServer.start_server)


                * [`FlaskRPCServer.stop_server()`](api/fugue.rpc.md#fugue.rpc.flask.FlaskRPCServer.stop_server)


    * [fugue.sql](api/fugue.sql.md)


        * [fugue.sql.api](api/fugue.sql.md#module-fugue.sql.api)


            * [`fugue_sql()`](api/fugue.sql.md#fugue.sql.api.fugue_sql)


            * [`fugue_sql_flow()`](api/fugue.sql.md#fugue.sql.api.fugue_sql_flow)


        * [fugue.sql.workflow](api/fugue.sql.md#module-fugue.sql.workflow)


            * [`FugueSQLWorkflow`](api/fugue.sql.md#fugue.sql.workflow.FugueSQLWorkflow)


                * [`FugueSQLWorkflow.sql_vars`](api/fugue.sql.md#fugue.sql.workflow.FugueSQLWorkflow.sql_vars)


    * [fugue.workflow](api/fugue.workflow.md)


        * [fugue.workflow.api](api/fugue.workflow.md#module-fugue.workflow.api)


            * [`out_transform()`](api/fugue.workflow.md#fugue.workflow.api.out_transform)


            * [`raw_sql()`](api/fugue.workflow.md#fugue.workflow.api.raw_sql)


            * [`transform()`](api/fugue.workflow.md#fugue.workflow.api.transform)


        * [fugue.workflow.input](api/fugue.workflow.md#module-fugue.workflow.input)


            * [`register_raw_df_type()`](api/fugue.workflow.md#fugue.workflow.input.register_raw_df_type)


        * [fugue.workflow.module](api/fugue.workflow.md#module-fugue.workflow.module)


            * [`module()`](api/fugue.workflow.md#fugue.workflow.module.module)


        * [fugue.workflow.workflow](api/fugue.workflow.md#module-fugue.workflow.workflow)


            * [`FugueWorkflow`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow)


                * [`FugueWorkflow.add()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.add)


                * [`FugueWorkflow.assert_eq()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.assert_eq)


                * [`FugueWorkflow.assert_not_eq()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.assert_not_eq)


                * [`FugueWorkflow.conf`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.conf)


                * [`FugueWorkflow.create()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.create)


                * [`FugueWorkflow.create_data()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.create_data)


                * [`FugueWorkflow.df()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.df)


                * [`FugueWorkflow.get_result()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.get_result)


                * [`FugueWorkflow.intersect()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.intersect)


                * [`FugueWorkflow.join()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.join)


                * [`FugueWorkflow.last_df`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.last_df)


                * [`FugueWorkflow.load()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.load)


                * [`FugueWorkflow.out_transform()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.out_transform)


                * [`FugueWorkflow.output()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.output)


                * [`FugueWorkflow.process()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.process)


                * [`FugueWorkflow.run()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.run)


                * [`FugueWorkflow.select()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.select)


                * [`FugueWorkflow.set_op()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.set_op)


                * [`FugueWorkflow.show()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.show)


                * [`FugueWorkflow.spec_uuid()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.spec_uuid)


                * [`FugueWorkflow.subtract()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.subtract)


                * [`FugueWorkflow.transform()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.transform)


                * [`FugueWorkflow.union()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.union)


                * [`FugueWorkflow.yields`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.yields)


                * [`FugueWorkflow.zip()`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflow.zip)


            * [`FugueWorkflowResult`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflowResult)


                * [`FugueWorkflowResult.yields`](api/fugue.workflow.md#fugue.workflow.workflow.FugueWorkflowResult.yields)


            * [`WorkflowDataFrame`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame)


                * [`WorkflowDataFrame.aggregate()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.aggregate)


                * [`WorkflowDataFrame.alter_columns()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.alter_columns)


                * [`WorkflowDataFrame.anti_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.anti_join)


                * [`WorkflowDataFrame.as_array()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.as_array)


                * [`WorkflowDataFrame.as_array_iterable()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.as_array_iterable)


                * [`WorkflowDataFrame.as_local()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.as_local)


                * [`WorkflowDataFrame.assert_eq()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.assert_eq)


                * [`WorkflowDataFrame.assert_not_eq()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.assert_not_eq)


                * [`WorkflowDataFrame.assign()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.assign)


                * [`WorkflowDataFrame.broadcast()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.broadcast)


                * [`WorkflowDataFrame.checkpoint()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.checkpoint)


                * [`WorkflowDataFrame.compute()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.compute)


                * [`WorkflowDataFrame.count()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.count)


                * [`WorkflowDataFrame.cross_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.cross_join)


                * [`WorkflowDataFrame.deterministic_checkpoint()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.deterministic_checkpoint)


                * [`WorkflowDataFrame.distinct()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.distinct)


                * [`WorkflowDataFrame.drop()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.drop)


                * [`WorkflowDataFrame.dropna()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.dropna)


                * [`WorkflowDataFrame.empty`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.empty)


                * [`WorkflowDataFrame.fillna()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.fillna)


                * [`WorkflowDataFrame.filter()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.filter)


                * [`WorkflowDataFrame.full_outer_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.full_outer_join)


                * [`WorkflowDataFrame.head()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.head)


                * [`WorkflowDataFrame.inner_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.inner_join)


                * [`WorkflowDataFrame.intersect()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.intersect)


                * [`WorkflowDataFrame.is_bounded`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.is_bounded)


                * [`WorkflowDataFrame.is_local`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.is_local)


                * [`WorkflowDataFrame.join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.join)


                * [`WorkflowDataFrame.left_anti_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.left_anti_join)


                * [`WorkflowDataFrame.left_outer_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.left_outer_join)


                * [`WorkflowDataFrame.left_semi_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.left_semi_join)


                * [`WorkflowDataFrame.name`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.name)


                * [`WorkflowDataFrame.native`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.native)


                * [`WorkflowDataFrame.native_as_df()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.native_as_df)


                * [`WorkflowDataFrame.num_partitions`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.num_partitions)


                * [`WorkflowDataFrame.out_transform()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.out_transform)


                * [`WorkflowDataFrame.output()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.output)


                * [`WorkflowDataFrame.partition()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.partition)


                * [`WorkflowDataFrame.partition_by()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.partition_by)


                * [`WorkflowDataFrame.partition_spec`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.partition_spec)


                * [`WorkflowDataFrame.peek_array()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.peek_array)


                * [`WorkflowDataFrame.per_partition_by()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.per_partition_by)


                * [`WorkflowDataFrame.per_row()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.per_row)


                * [`WorkflowDataFrame.persist()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.persist)


                * [`WorkflowDataFrame.process()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.process)


                * [`WorkflowDataFrame.rename()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.rename)


                * [`WorkflowDataFrame.result`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.result)


                * [`WorkflowDataFrame.right_outer_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.right_outer_join)


                * [`WorkflowDataFrame.sample()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.sample)


                * [`WorkflowDataFrame.save()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.save)


                * [`WorkflowDataFrame.save_and_use()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.save_and_use)


                * [`WorkflowDataFrame.schema`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.schema)


                * [`WorkflowDataFrame.select()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.select)


                * [`WorkflowDataFrame.semi_join()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.semi_join)


                * [`WorkflowDataFrame.show()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.show)


                * [`WorkflowDataFrame.spec_uuid()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.spec_uuid)


                * [`WorkflowDataFrame.strong_checkpoint()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.strong_checkpoint)


                * [`WorkflowDataFrame.subtract()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.subtract)


                * [`WorkflowDataFrame.take()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.take)


                * [`WorkflowDataFrame.transform()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.transform)


                * [`WorkflowDataFrame.union()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.union)


                * [`WorkflowDataFrame.weak_checkpoint()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.weak_checkpoint)


                * [`WorkflowDataFrame.workflow`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.workflow)


                * [`WorkflowDataFrame.yield_dataframe_as()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.yield_dataframe_as)


                * [`WorkflowDataFrame.yield_file_as()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.yield_file_as)


                * [`WorkflowDataFrame.yield_table_as()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.yield_table_as)


                * [`WorkflowDataFrame.zip()`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrame.zip)


            * [`WorkflowDataFrames`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrames)


                * [`WorkflowDataFrames.workflow`](api/fugue.workflow.md#fugue.workflow.workflow.WorkflowDataFrames.workflow)


    * [fugue.api](api/fugue.md#module-fugue.api)


    * [fugue.constants](api/fugue.md#module-fugue.constants)


        * [`register_global_conf()`](api/fugue.md#fugue.constants.register_global_conf)


    * [fugue.exceptions](api/fugue.md#module-fugue.exceptions)


        * [`FugueBug`](api/fugue.md#fugue.exceptions.FugueBug)


        * [`FugueDataFrameError`](api/fugue.md#fugue.exceptions.FugueDataFrameError)


        * [`FugueDataFrameInitError`](api/fugue.md#fugue.exceptions.FugueDataFrameInitError)


        * [`FugueDataFrameOperationError`](api/fugue.md#fugue.exceptions.FugueDataFrameOperationError)


        * [`FugueDatasetEmptyError`](api/fugue.md#fugue.exceptions.FugueDatasetEmptyError)


        * [`FugueError`](api/fugue.md#fugue.exceptions.FugueError)


        * [`FugueInterfacelessError`](api/fugue.md#fugue.exceptions.FugueInterfacelessError)


        * [`FugueInvalidOperation`](api/fugue.md#fugue.exceptions.FugueInvalidOperation)


        * [`FuguePluginsRegistrationError`](api/fugue.md#fugue.exceptions.FuguePluginsRegistrationError)


        * [`FugueSQLError`](api/fugue.md#fugue.exceptions.FugueSQLError)


        * [`FugueSQLRuntimeError`](api/fugue.md#fugue.exceptions.FugueSQLRuntimeError)


        * [`FugueSQLSyntaxError`](api/fugue.md#fugue.exceptions.FugueSQLSyntaxError)


        * [`FugueWorkflowCompileError`](api/fugue.md#fugue.exceptions.FugueWorkflowCompileError)


        * [`FugueWorkflowCompileValidationError`](api/fugue.md#fugue.exceptions.FugueWorkflowCompileValidationError)


        * [`FugueWorkflowError`](api/fugue.md#fugue.exceptions.FugueWorkflowError)


        * [`FugueWorkflowRuntimeError`](api/fugue.md#fugue.exceptions.FugueWorkflowRuntimeError)


        * [`FugueWorkflowRuntimeValidationError`](api/fugue.md#fugue.exceptions.FugueWorkflowRuntimeValidationError)


    * [fugue.plugins](api/fugue.md#module-fugue.plugins)


    * [fugue.registry](api/fugue.md#module-fugue.registry)


* [fugue_sql](api_sql/fugue_sql.md)


    * [fugue_sql.exceptions](api_sql/fugue_sql.md#module-fugue_sql.exceptions)


* [fugue_duckdb](api_duckdb/fugue_duckdb.md)


    * [fugue_duckdb.dask](api_duckdb/fugue_duckdb.md#module-fugue_duckdb.dask)


        * [`DuckDaskExecutionEngine`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine)


            * [`DuckDaskExecutionEngine.broadcast()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.broadcast)


            * [`DuckDaskExecutionEngine.convert_yield_dataframe()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.convert_yield_dataframe)


            * [`DuckDaskExecutionEngine.create_default_map_engine()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.create_default_map_engine)


            * [`DuckDaskExecutionEngine.dask_client`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.dask_client)


            * [`DuckDaskExecutionEngine.get_current_parallelism()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.get_current_parallelism)


            * [`DuckDaskExecutionEngine.persist()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.persist)


            * [`DuckDaskExecutionEngine.repartition()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.repartition)


            * [`DuckDaskExecutionEngine.save_df()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.save_df)


            * [`DuckDaskExecutionEngine.to_df()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dask.DuckDaskExecutionEngine.to_df)


    * [fugue_duckdb.dataframe](api_duckdb/fugue_duckdb.md#module-fugue_duckdb.dataframe)


        * [`DuckDataFrame`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame)


            * [`DuckDataFrame.alias`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.alias)


            * [`DuckDataFrame.alter_columns()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.alter_columns)


            * [`DuckDataFrame.as_array()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.as_array)


            * [`DuckDataFrame.as_array_iterable()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.as_array_iterable)


            * [`DuckDataFrame.as_arrow()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.as_arrow)


            * [`DuckDataFrame.as_local()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.as_local)


            * [`DuckDataFrame.as_pandas()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.as_pandas)


            * [`DuckDataFrame.count()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.count)


            * [`DuckDataFrame.empty`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.empty)


            * [`DuckDataFrame.head()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.head)


            * [`DuckDataFrame.native`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.native)


            * [`DuckDataFrame.native_as_df()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.native_as_df)


            * [`DuckDataFrame.peek_array()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.peek_array)


            * [`DuckDataFrame.rename()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.dataframe.DuckDataFrame.rename)


    * [fugue_duckdb.execution_engine](api_duckdb/fugue_duckdb.md#module-fugue_duckdb.execution_engine)


        * [`DuckDBEngine`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine)


            * [`DuckDBEngine.dialect`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine.dialect)


            * [`DuckDBEngine.is_distributed`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine.is_distributed)


            * [`DuckDBEngine.load_table()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine.load_table)


            * [`DuckDBEngine.save_table()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine.save_table)


            * [`DuckDBEngine.select()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine.select)


            * [`DuckDBEngine.table_exists()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckDBEngine.table_exists)


        * [`DuckExecutionEngine`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine)


            * [`DuckExecutionEngine.broadcast()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.broadcast)


            * [`DuckExecutionEngine.connection`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.connection)


            * [`DuckExecutionEngine.convert_yield_dataframe()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.convert_yield_dataframe)


            * [`DuckExecutionEngine.create_default_map_engine()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.create_default_map_engine)


            * [`DuckExecutionEngine.create_default_sql_engine()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.create_default_sql_engine)


            * [`DuckExecutionEngine.distinct()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.distinct)


            * [`DuckExecutionEngine.dropna()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.dropna)


            * [`DuckExecutionEngine.fillna()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.fillna)


            * [`DuckExecutionEngine.fs`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.fs)


            * [`DuckExecutionEngine.get_current_parallelism()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.get_current_parallelism)


            * [`DuckExecutionEngine.intersect()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.intersect)


            * [`DuckExecutionEngine.is_distributed`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.is_distributed)


            * [`DuckExecutionEngine.join()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.join)


            * [`DuckExecutionEngine.load_df()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.load_df)


            * [`DuckExecutionEngine.log`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.log)


            * [`DuckExecutionEngine.persist()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.persist)


            * [`DuckExecutionEngine.repartition()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.repartition)


            * [`DuckExecutionEngine.sample()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.sample)


            * [`DuckExecutionEngine.save_df()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.save_df)


            * [`DuckExecutionEngine.stop_engine()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.stop_engine)


            * [`DuckExecutionEngine.subtract()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.subtract)


            * [`DuckExecutionEngine.take()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.take)


            * [`DuckExecutionEngine.to_df()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.to_df)


            * [`DuckExecutionEngine.union()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.execution_engine.DuckExecutionEngine.union)


    * [fugue_duckdb.ibis_engine](api_duckdb/fugue_duckdb.md#module-fugue_duckdb.ibis_engine)


        * [`DuckDBIbisEngine`](api_duckdb/fugue_duckdb.md#fugue_duckdb.ibis_engine.DuckDBIbisEngine)


            * [`DuckDBIbisEngine.select()`](api_duckdb/fugue_duckdb.md#fugue_duckdb.ibis_engine.DuckDBIbisEngine.select)


    * [fugue_duckdb.registry](api_duckdb/fugue_duckdb.md#module-fugue_duckdb.registry)


* [fugue_spark](api_spark/fugue_spark.md)


    * [fugue_spark.dataframe](api_spark/fugue_spark.md#module-fugue_spark.dataframe)


        * [`SparkDataFrame`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame)


            * [`SparkDataFrame.alias`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.alias)


            * [`SparkDataFrame.alter_columns()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.alter_columns)


            * [`SparkDataFrame.as_array()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.as_array)


            * [`SparkDataFrame.as_array_iterable()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.as_array_iterable)


            * [`SparkDataFrame.as_local()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.as_local)


            * [`SparkDataFrame.as_pandas()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.as_pandas)


            * [`SparkDataFrame.count()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.count)


            * [`SparkDataFrame.empty`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.empty)


            * [`SparkDataFrame.head()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.head)


            * [`SparkDataFrame.is_bounded`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.is_bounded)


            * [`SparkDataFrame.is_local`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.is_local)


            * [`SparkDataFrame.native`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.native)


            * [`SparkDataFrame.native_as_df()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.native_as_df)


            * [`SparkDataFrame.num_partitions`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.num_partitions)


            * [`SparkDataFrame.peek_array()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.peek_array)


            * [`SparkDataFrame.rename()`](api_spark/fugue_spark.md#fugue_spark.dataframe.SparkDataFrame.rename)


    * [fugue_spark.execution_engine](api_spark/fugue_spark.md#module-fugue_spark.execution_engine)


        * [`SparkExecutionEngine`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine)


            * [`SparkExecutionEngine.broadcast()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.broadcast)


            * [`SparkExecutionEngine.create_default_map_engine()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.create_default_map_engine)


            * [`SparkExecutionEngine.create_default_sql_engine()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.create_default_sql_engine)


            * [`SparkExecutionEngine.distinct()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.distinct)


            * [`SparkExecutionEngine.dropna()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.dropna)


            * [`SparkExecutionEngine.fillna()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.fillna)


            * [`SparkExecutionEngine.fs`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.fs)


            * [`SparkExecutionEngine.get_current_parallelism()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.get_current_parallelism)


            * [`SparkExecutionEngine.intersect()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.intersect)


            * [`SparkExecutionEngine.is_distributed`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.is_distributed)


            * [`SparkExecutionEngine.join()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.join)


            * [`SparkExecutionEngine.load_df()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.load_df)


            * [`SparkExecutionEngine.log`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.log)


            * [`SparkExecutionEngine.persist()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.persist)


            * [`SparkExecutionEngine.register()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.register)


            * [`SparkExecutionEngine.repartition()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.repartition)


            * [`SparkExecutionEngine.sample()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.sample)


            * [`SparkExecutionEngine.save_df()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.save_df)


            * [`SparkExecutionEngine.spark_session`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.spark_session)


            * [`SparkExecutionEngine.subtract()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.subtract)


            * [`SparkExecutionEngine.take()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.take)


            * [`SparkExecutionEngine.to_df()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.to_df)


            * [`SparkExecutionEngine.union()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkExecutionEngine.union)


        * [`SparkMapEngine`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkMapEngine)


            * [`SparkMapEngine.is_distributed`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkMapEngine.is_distributed)


            * [`SparkMapEngine.map_dataframe()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkMapEngine.map_dataframe)


        * [`SparkSQLEngine`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkSQLEngine)


            * [`SparkSQLEngine.dialect`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkSQLEngine.dialect)


            * [`SparkSQLEngine.execution_engine_constraint`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkSQLEngine.execution_engine_constraint)


            * [`SparkSQLEngine.is_distributed`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkSQLEngine.is_distributed)


            * [`SparkSQLEngine.select()`](api_spark/fugue_spark.md#fugue_spark.execution_engine.SparkSQLEngine.select)


    * [fugue_spark.ibis_engine](api_spark/fugue_spark.md#module-fugue_spark.ibis_engine)


        * [`SparkIbisEngine`](api_spark/fugue_spark.md#fugue_spark.ibis_engine.SparkIbisEngine)


            * [`SparkIbisEngine.select()`](api_spark/fugue_spark.md#fugue_spark.ibis_engine.SparkIbisEngine.select)


    * [fugue_spark.registry](api_spark/fugue_spark.md#module-fugue_spark.registry)


* [fugue_dask](api_dask/fugue_dask.md)


    * [fugue_dask.dataframe](api_dask/fugue_dask.md#module-fugue_dask.dataframe)


        * [`DaskDataFrame`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame)


            * [`DaskDataFrame.alter_columns()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.alter_columns)


            * [`DaskDataFrame.as_array()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.as_array)


            * [`DaskDataFrame.as_array_iterable()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.as_array_iterable)


            * [`DaskDataFrame.as_local()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.as_local)


            * [`DaskDataFrame.as_pandas()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.as_pandas)


            * [`DaskDataFrame.count()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.count)


            * [`DaskDataFrame.empty`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.empty)


            * [`DaskDataFrame.head()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.head)


            * [`DaskDataFrame.is_bounded`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.is_bounded)


            * [`DaskDataFrame.is_local`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.is_local)


            * [`DaskDataFrame.native`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.native)


            * [`DaskDataFrame.native_as_df()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.native_as_df)


            * [`DaskDataFrame.num_partitions`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.num_partitions)


            * [`DaskDataFrame.peek_array()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.peek_array)


            * [`DaskDataFrame.persist()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.persist)


            * [`DaskDataFrame.rename()`](api_dask/fugue_dask.md#fugue_dask.dataframe.DaskDataFrame.rename)


    * [fugue_dask.execution_engine](api_dask/fugue_dask.md#module-fugue_dask.execution_engine)


        * [`DaskExecutionEngine`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine)


            * [`DaskExecutionEngine.broadcast()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.broadcast)


            * [`DaskExecutionEngine.create_default_map_engine()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.create_default_map_engine)


            * [`DaskExecutionEngine.create_default_sql_engine()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.create_default_sql_engine)


            * [`DaskExecutionEngine.dask_client`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.dask_client)


            * [`DaskExecutionEngine.distinct()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.distinct)


            * [`DaskExecutionEngine.dropna()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.dropna)


            * [`DaskExecutionEngine.fillna()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.fillna)


            * [`DaskExecutionEngine.fs`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.fs)


            * [`DaskExecutionEngine.get_current_parallelism()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.get_current_parallelism)


            * [`DaskExecutionEngine.intersect()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.intersect)


            * [`DaskExecutionEngine.is_distributed`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.is_distributed)


            * [`DaskExecutionEngine.join()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.join)


            * [`DaskExecutionEngine.load_df()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.load_df)


            * [`DaskExecutionEngine.log`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.log)


            * [`DaskExecutionEngine.persist()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.persist)


            * [`DaskExecutionEngine.pl_utils`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.pl_utils)


            * [`DaskExecutionEngine.repartition()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.repartition)


            * [`DaskExecutionEngine.sample()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.sample)


            * [`DaskExecutionEngine.save_df()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.save_df)


            * [`DaskExecutionEngine.subtract()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.subtract)


            * [`DaskExecutionEngine.take()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.take)


            * [`DaskExecutionEngine.to_df()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.to_df)


            * [`DaskExecutionEngine.union()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskExecutionEngine.union)


        * [`DaskMapEngine`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskMapEngine)


            * [`DaskMapEngine.execution_engine_constraint`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskMapEngine.execution_engine_constraint)


            * [`DaskMapEngine.is_distributed`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskMapEngine.is_distributed)


            * [`DaskMapEngine.map_dataframe()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.DaskMapEngine.map_dataframe)


        * [`QPDDaskEngine`](api_dask/fugue_dask.md#fugue_dask.execution_engine.QPDDaskEngine)


            * [`QPDDaskEngine.dialect`](api_dask/fugue_dask.md#fugue_dask.execution_engine.QPDDaskEngine.dialect)


            * [`QPDDaskEngine.is_distributed`](api_dask/fugue_dask.md#fugue_dask.execution_engine.QPDDaskEngine.is_distributed)


            * [`QPDDaskEngine.select()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.QPDDaskEngine.select)


            * [`QPDDaskEngine.to_df()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.QPDDaskEngine.to_df)


        * [`to_dask_engine_df()`](api_dask/fugue_dask.md#fugue_dask.execution_engine.to_dask_engine_df)


    * [fugue_dask.ibis_engine](api_dask/fugue_dask.md#module-fugue_dask.ibis_engine)


        * [`DaskIbisEngine`](api_dask/fugue_dask.md#fugue_dask.ibis_engine.DaskIbisEngine)


            * [`DaskIbisEngine.select()`](api_dask/fugue_dask.md#fugue_dask.ibis_engine.DaskIbisEngine.select)


    * [fugue_dask.registry](api_dask/fugue_dask.md#module-fugue_dask.registry)


* [fugue_ray](api_ray/fugue_ray.md)


    * [fugue_ray.dataframe](api_ray/fugue_ray.md#module-fugue_ray.dataframe)


        * [`RayDataFrame`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame)


            * [`RayDataFrame.alter_columns()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.alter_columns)


            * [`RayDataFrame.as_array()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.as_array)


            * [`RayDataFrame.as_array_iterable()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.as_array_iterable)


            * [`RayDataFrame.as_arrow()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.as_arrow)


            * [`RayDataFrame.as_local()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.as_local)


            * [`RayDataFrame.as_pandas()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.as_pandas)


            * [`RayDataFrame.count()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.count)


            * [`RayDataFrame.empty`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.empty)


            * [`RayDataFrame.head()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.head)


            * [`RayDataFrame.is_bounded`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.is_bounded)


            * [`RayDataFrame.is_local`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.is_local)


            * [`RayDataFrame.native`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.native)


            * [`RayDataFrame.native_as_df()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.native_as_df)


            * [`RayDataFrame.num_partitions`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.num_partitions)


            * [`RayDataFrame.peek_array()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.peek_array)


            * [`RayDataFrame.persist()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.persist)


            * [`RayDataFrame.rename()`](api_ray/fugue_ray.md#fugue_ray.dataframe.RayDataFrame.rename)


    * [fugue_ray.execution_engine](api_ray/fugue_ray.md#module-fugue_ray.execution_engine)


        * [`RayExecutionEngine`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine)


            * [`RayExecutionEngine.broadcast()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.broadcast)


            * [`RayExecutionEngine.convert_yield_dataframe()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.convert_yield_dataframe)


            * [`RayExecutionEngine.create_default_map_engine()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.create_default_map_engine)


            * [`RayExecutionEngine.get_current_parallelism()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.get_current_parallelism)


            * [`RayExecutionEngine.is_distributed`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.is_distributed)


            * [`RayExecutionEngine.load_df()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.load_df)


            * [`RayExecutionEngine.persist()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.persist)


            * [`RayExecutionEngine.repartition()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.repartition)


            * [`RayExecutionEngine.save_df()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.save_df)


            * [`RayExecutionEngine.to_df()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayExecutionEngine.to_df)


        * [`RayMapEngine`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayMapEngine)


            * [`RayMapEngine.execution_engine_constraint`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayMapEngine.execution_engine_constraint)


            * [`RayMapEngine.is_distributed`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayMapEngine.is_distributed)


            * [`RayMapEngine.map_dataframe()`](api_ray/fugue_ray.md#fugue_ray.execution_engine.RayMapEngine.map_dataframe)


    * [fugue_ray.registry](api_ray/fugue_ray.md#module-fugue_ray.registry)


* [fugue_ibis](api_ibis/fugue_ibis.md)


    * [fugue_ibis.execution](api_ibis/fugue_ibis.execution.md)


        * [fugue_ibis.execution.ibis_engine](api_ibis/fugue_ibis.execution.md#module-fugue_ibis.execution.ibis_engine)


            * [`IbisEngine`](api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine)


                * [`IbisEngine.is_distributed`](api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine.is_distributed)


                * [`IbisEngine.select()`](api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine.select)


                * [`IbisEngine.to_df()`](api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.ibis_engine.IbisEngine.to_df)


        * [fugue_ibis.execution.pandas_backend](api_ibis/fugue_ibis.execution.md#module-fugue_ibis.execution.pandas_backend)


            * [`PandasIbisEngine`](api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.pandas_backend.PandasIbisEngine)


                * [`PandasIbisEngine.select()`](api_ibis/fugue_ibis.execution.md#fugue_ibis.execution.pandas_backend.PandasIbisEngine.select)


    * [fugue_ibis.dataframe](api_ibis/fugue_ibis.md#module-fugue_ibis.dataframe)


        * [`IbisDataFrame`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame)


            * [`IbisDataFrame.alter_columns()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.alter_columns)


            * [`IbisDataFrame.as_array()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.as_array)


            * [`IbisDataFrame.as_array_iterable()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.as_array_iterable)


            * [`IbisDataFrame.as_arrow()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.as_arrow)


            * [`IbisDataFrame.as_local()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.as_local)


            * [`IbisDataFrame.as_pandas()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.as_pandas)


            * [`IbisDataFrame.columns`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.columns)


            * [`IbisDataFrame.count()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.count)


            * [`IbisDataFrame.empty`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.empty)


            * [`IbisDataFrame.head()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.head)


            * [`IbisDataFrame.is_bounded`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.is_bounded)


            * [`IbisDataFrame.is_local`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.is_local)


            * [`IbisDataFrame.native`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.native)


            * [`IbisDataFrame.native_as_df()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.native_as_df)


            * [`IbisDataFrame.num_partitions`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.num_partitions)


            * [`IbisDataFrame.peek_array()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.peek_array)


            * [`IbisDataFrame.rename()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.rename)


            * [`IbisDataFrame.to_sql()`](api_ibis/fugue_ibis.md#fugue_ibis.dataframe.IbisDataFrame.to_sql)


    * [fugue_ibis.execution_engine](api_ibis/fugue_ibis.md#module-fugue_ibis.execution_engine)


        * [`IbisExecutionEngine`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine)


            * [`IbisExecutionEngine.broadcast()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.broadcast)


            * [`IbisExecutionEngine.create_default_map_engine()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.create_default_map_engine)


            * [`IbisExecutionEngine.create_non_ibis_execution_engine()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.create_non_ibis_execution_engine)


            * [`IbisExecutionEngine.distinct()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.distinct)


            * [`IbisExecutionEngine.dropna()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.dropna)


            * [`IbisExecutionEngine.fillna()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.fillna)


            * [`IbisExecutionEngine.fs`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.fs)


            * [`IbisExecutionEngine.get_current_parallelism()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.get_current_parallelism)


            * [`IbisExecutionEngine.ibis_sql_engine`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.ibis_sql_engine)


            * [`IbisExecutionEngine.intersect()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.intersect)


            * [`IbisExecutionEngine.is_non_ibis()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.is_non_ibis)


            * [`IbisExecutionEngine.join()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.join)


            * [`IbisExecutionEngine.log`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.log)


            * [`IbisExecutionEngine.non_ibis_engine`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.non_ibis_engine)


            * [`IbisExecutionEngine.persist()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.persist)


            * [`IbisExecutionEngine.repartition()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.repartition)


            * [`IbisExecutionEngine.sample()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.sample)


            * [`IbisExecutionEngine.subtract()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.subtract)


            * [`IbisExecutionEngine.take()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.take)


            * [`IbisExecutionEngine.to_df()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.to_df)


            * [`IbisExecutionEngine.union()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisExecutionEngine.union)


        * [`IbisMapEngine`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisMapEngine)


            * [`IbisMapEngine.execution_engine_constraint`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisMapEngine.execution_engine_constraint)


            * [`IbisMapEngine.is_distributed`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisMapEngine.is_distributed)


            * [`IbisMapEngine.map_bag()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisMapEngine.map_bag)


            * [`IbisMapEngine.map_dataframe()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisMapEngine.map_dataframe)


        * [`IbisSQLEngine`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine)


            * [`IbisSQLEngine.backend`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.backend)


            * [`IbisSQLEngine.distinct()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.distinct)


            * [`IbisSQLEngine.dropna()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.dropna)


            * [`IbisSQLEngine.encode_column_name()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.encode_column_name)


            * [`IbisSQLEngine.fillna()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.fillna)


            * [`IbisSQLEngine.get_temp_table_name()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.get_temp_table_name)


            * [`IbisSQLEngine.intersect()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.intersect)


            * [`IbisSQLEngine.join()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.join)


            * [`IbisSQLEngine.load_table()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.load_table)


            * [`IbisSQLEngine.persist()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.persist)


            * [`IbisSQLEngine.query_to_table()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.query_to_table)


            * [`IbisSQLEngine.sample()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.sample)


            * [`IbisSQLEngine.save_table()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.save_table)


            * [`IbisSQLEngine.select()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.select)


            * [`IbisSQLEngine.subtract()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.subtract)


            * [`IbisSQLEngine.table_exists()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.table_exists)


            * [`IbisSQLEngine.take()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.take)


            * [`IbisSQLEngine.union()`](api_ibis/fugue_ibis.md#fugue_ibis.execution_engine.IbisSQLEngine.union)


    * [fugue_ibis.extensions](api_ibis/fugue_ibis.md#module-fugue_ibis.extensions)


        * [`as_fugue()`](api_ibis/fugue_ibis.md#fugue_ibis.extensions.as_fugue)


        * [`as_ibis()`](api_ibis/fugue_ibis.md#fugue_ibis.extensions.as_ibis)


        * [`run_ibis()`](api_ibis/fugue_ibis.md#fugue_ibis.extensions.run_ibis)
